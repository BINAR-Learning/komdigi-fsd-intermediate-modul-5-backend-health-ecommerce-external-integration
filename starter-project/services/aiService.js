/**
 * ⚠️ FILE INI PERLU DILENGKAPI
 *
 * AI Service - Google Gemini Integration
 * Health E-Commerce AI Chatbot
 *
 * Tugas:
 * Implement AI chatbot yang kasih rekomendasi produk kesehatan
 */

// TODO: Import dependencies
// const axios = require('axios');
// const Product = require('../models/Product');

// TODO: Create AIService class
/*
class AIService {
  constructor() {
    this.apiKey = process.env.GOOGLE_AI_API_KEY;
    this.geminiURL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  }
  
  async getHealthRecommendation(userQuestion) {
    try {
      // 1. Fetch products dari database
      const products = await Product.find({ isActive: true })
        .select('name category price description')
        .limit(30);
      
      // 2. Build product context
      const productList = products.map(p => 
        `- ${p.name} (${p.category}): ${p.description}`
      ).join('\n');
      
      // 3. Create prompt untuk Gemini
      const prompt = `
Kamu adalah asisten apotek digital. 
Berikan rekomendasi produk berdasarkan pertanyaan user.

Produk tersedia:
${productList}

Pertanyaan: "${userQuestion}"

Jawab dengan natural, maksimal 3 produk.`;

      // 4. Call Gemini API
      const response = await axios.post(
        \`\${this.geminiURL}?key=\${this.apiKey}\`,
        {
          contents: [{
            parts: [{ text: prompt }]
          }]
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 30000
        }
      );
      
      const aiAnswer = response.data.candidates[0].content.parts[0].text;
      
      // 5. Extract recommended products
      const recommendations = this.extractProducts(aiAnswer, products);
      
      return {
        success: true,
        answer: aiAnswer,
        recommendedProducts: recommendations
      };
    } catch (error) {
      return {
        success: false,
        message: "AI service error"
      };
    }
  }
  
  extractProducts(aiText, products) {
    // TODO: Implement product extraction logic
    return [];
  }
}
*/

// TODO: Export
// module.exports = new AIService();
