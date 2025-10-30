/**
 * Kemenkes API Service
 * Integration dengan API Satu Sehat Kemenkes
 *
 * Catatan: Service untuk fetch official health product data
 */

const axios = require("axios");
const Product = require("../models/Product");

class KemenkesService {
  constructor() {
    this.baseURL =
      process.env.KEMENKES_API_URL ||
      "https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1";
    this.apiKey = process.env.KEMENKES_API_KEY;
  }

  async getMedications(searchQuery = "", limit = 10) {
    try {
      const response = await axios.get(`${this.baseURL}/Medication`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        params: {
          _count: limit,
          name: searchQuery || undefined,
        },
        timeout: 10000,
      });

      const medications = this.transformFHIRData(response.data);

      return {
        success: true,
        count: medications.length,
        data: medications,
        source: "kemenkes",
      };
    } catch (error) {
      console.error("Kemenkes API Error:", error.message);
      return {
        success: false,
        message: "Failed to fetch from Kemenkes API",
        error: error.message,
      };
    }
  }

  transformFHIRData(fhirResponse) {
    if (!fhirResponse.entry) return [];

    return fhirResponse.entry.map((item) => ({
      kemenkesId: item.resource.id,
      name: item.resource.code?.coding[0]?.display || "Unknown",
      category: "Medicine",
      description: item.resource.code?.text || "",
      source: "kemenkes",
      retrievedAt: new Date(),
    }));
  }

  async syncToDatabase() {
    try {
      const result = await this.getMedications("", 50);

      if (!result.success) {
        throw new Error(result.message);
      }

      const saved = [];

      for (const med of result.data) {
        const exists = await Product.findOne({ kemenkesId: med.kemenkesId });

        if (!exists) {
          const product = await Product.create({
            name: med.name,
            description: med.description,
            category: med.category,
            price: 0,
            stock: 0,
            manufacturer: "Kemenkes",
            kemenkesId: med.kemenkesId,
          });
          saved.push(product);
        }
      }

      return {
        success: true,
        message: `Synced ${saved.length} new products from Kemenkes`,
        saved: saved.length,
      };
    } catch (error) {
      return {
        success: false,
        message: "Sync failed",
        error: error.message,
      };
    }
  }
}

module.exports = new KemenkesService();
