/**
 * Midtrans Payment Service
 * Payment gateway integration untuk Health E-Commerce
 */

const axios = require("axios");
const crypto = require("crypto");

class MidtransService {
  constructor() {
    this.serverKey = process.env.MIDTRANS_SERVER_KEY;
    this.clientKey = process.env.MIDTRANS_CLIENT_KEY;
    this.isProduction = process.env.NODE_ENV === "production";
    this.snapURL = this.isProduction
      ? "https://app.midtrans.com/snap/v1/transactions"
      : "https://app.sandbox.midtrans.com/snap/v1/transactions";
  }

  async createTransaction(orderData) {
    try {
      const parameter = {
        transaction_details: {
          order_id: orderData.orderId,
          gross_amount: orderData.amount,
        },
        customer_details: {
          first_name: orderData.customerName,
          email: orderData.customerEmail,
        },
        item_details: orderData.items,
      };

      const authString = Buffer.from(`${this.serverKey}:`).toString("base64");

      const response = await axios.post(this.snapURL, parameter, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authString}`,
        },
      });

      return {
        success: true,
        token: response.data.token,
        redirectUrl: response.data.redirect_url,
      };
    } catch (error) {
      console.error("Midtrans Error:", error.response?.data || error.message);
      return {
        success: false,
        message: "Payment creation failed",
      };
    }
  }

  verifySignatureKey(orderId, statusCode, grossAmount, serverKey) {
    const signatureString = `${orderId}${statusCode}${grossAmount}${serverKey}`;
    return crypto.createHash("sha512").update(signatureString).digest("hex");
  }

  handleNotification(notification) {
    const hash = this.verifySignatureKey(
      notification.order_id,
      notification.status_code,
      notification.gross_amount,
      this.serverKey
    );

    if (hash !== notification.signature_key) {
      return {
        success: false,
        message: "Invalid signature",
      };
    }

    return {
      success: true,
      status: notification.transaction_status,
      orderId: notification.order_id,
    };
  }
}

module.exports = new MidtransService();
