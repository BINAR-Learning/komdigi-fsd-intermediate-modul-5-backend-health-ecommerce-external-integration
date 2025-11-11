/**
 * Direct Email Test
 * Test email service directly tanpa webhook
 */

require("dotenv").config();
const emailService = require("./services/emailService");

async function testEmail() {
  console.log("\n Testing Email Service Directly\n");

  // Check SMTP config
  console.log(" SMTP Configuration:");
  console.log("   HOST:", process.env.SMTP_HOST || "NOT SET");
  console.log("   PORT:", process.env.SMTP_PORT || "NOT SET");
  console.log("   USER:", process.env.SMTP_USER || "NOT SET");
  console.log(
    "   PASS:",
    process.env.SMTP_PASS ? "***" + process.env.SMTP_PASS.slice(-4) : "NOT SET"
  );
  console.log("   FROM:", process.env.SMTP_FROM || "NOT SET");
  console.log("");

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error(" SMTP credentials not configured!");
    console.error("\nTo setup:");
    console.error("1. Create .env file in this directory");
    console.error("2. Add:");
    console.error("   SMTP_HOST=smtp.gmail.com");
    console.error("   SMTP_PORT=587");
    console.error("   SMTP_USER=your-email@gmail.com");
    console.error("   SMTP_PASS=your-app-password");
    console.error("\n3. Get Gmail App Password:");
    console.error("   https://myaccount.google.com/apppasswords");
    console.error("\n4. Restart and run this test again");
    return;
  }

  console.log(" SMTP credentials found. Testing connection...\n");

  // Test connection first
  try {
    const connectionTest = await emailService.testConnection();
    console.log("Connection test result:", connectionTest);

    if (!connectionTest.success) {
      console.error("\n Connection failed!");
      console.error("Error:", connectionTest.error);
      return;
    }

    console.log(" Connection successful!\n");
  } catch (error) {
    console.error(" Connection test failed:", error.message);
    return;
  }

  // Send test email
  console.log(" Sending test email...\n");

  const testOrder = {
    orderId: "ORDER-TEST-" + Date.now(),
    customerEmail: process.env.TEST_EMAIL || process.env.SMTP_USER,
    amount: 170000,
    items: [{ name: "Vitamin C 1000mg", price: 85000, quantity: 2 }],
  };

  console.log(" Sending to:", testOrder.customerEmail);

  try {
    const result = await emailService.sendPaymentConfirmation(testOrder);

    console.log("\n" + "=".repeat(60));
    if (result.success) {
      console.log(" EMAIL SENT SUCCESSFULLY!");
      console.log("   Message ID:", result.messageId);
      console.log("\n Check your inbox:", testOrder.customerEmail);
      console.log("   If not in inbox, check spam folder!");
    } else {
      console.log(" EMAIL FAILED!");
      console.log("   Error:", result.error);
      console.log("   Code:", result.code);

      if (result.code === "EAUTH") {
        console.log("\n Tip:");
        console.log("   - Use Gmail App Password (NOT regular password)");
        console.log("   - Enable 2-Factor Auth first");
        console.log("   - Get from: https://myaccount.google.com/apppasswords");
      }
    }
    console.log("=".repeat(60) + "\n");
  } catch (error) {
    console.error("\n Unexpected error:", error.message);
  }
}

// Run test
testEmail();
