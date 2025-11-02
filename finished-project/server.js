/**
 * Health E-Commerce Server dengan External Integrations
 * Modul 5: Melanjutkan dari Modul 4 (Auth) dengan AI & External APIs
 */

require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("mongo-sanitize");
const morgan = require("morgan");

const connectDB = require("./config/database");

// Import ALL routes (from Modul 3, 4, 5)
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const externalRoutes = require("./routes/externalRoutes");

const app = express();

// Connect to database
connectDB();

// Security
app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://yourdomain.com"]
        : true, // Allow all origins in development (for frontend testing)
    credentials: true,
  })
);

// Body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Sanitize
app.use((req, res, next) => {
  req.body = mongoSanitize(req.body);
  req.params = mongoSanitize(req.params);
  req.query = mongoSanitize(req.query);
  next();
});

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use("/api/", apiLimiter);

// Mount Routes (Complete API from Modul 1-5)
app.use("/api/products", productRoutes);     // From Modul 3 (CRUD)
app.use("/api/auth", authRoutes);            // From Modul 4 (Authentication)
app.use("/api/external", externalRoutes);    // From Modul 5 (Integrations)

// Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Health E-Commerce API with External Integrations",
    features: ["AI Chatbot 🤖", "Kemenkes API 🏥", "Midtrans Payment 💳"],
    timestamp: new Date().toISOString(),
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "development" ? err.message : "Server error",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;  // Port 5000 for Frontend integration!
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════════════╗
  ║  🏥 HEALTH E-COMMERCE API - ULTIMATE BACKEND                  ║
  ║  📍 Port: ${PORT}                                                  ║
  ║                                                               ║
  ║  📦 Products API (Modul 3):                                   ║
  ║     GET    /api/products                                      ║
  ║     POST   /api/products (Admin)                              ║
  ║                                                               ║
  ║  🔐 Authentication (Modul 4):                                 ║
  ║     POST   /api/auth/register                                 ║
  ║     POST   /api/auth/login                                    ║
  ║     GET    /api/auth/profile                                  ║
  ║                                                               ║
  ║  🤖 AI & Integrations (Modul 5):                              ║
  ║     POST   /api/external/ai/ask                               ║
  ║     GET    /api/external/kemenkes/medications                 ║
  ║     POST   /api/external/payment/create                       ║
  ║                                                               ║
  ║  ✅ READY FOR FRONTEND INTEGRATION!                           ║
  ╚═══════════════════════════════════════════════════════════════╝
  `);
  console.log(`\n🔗 Frontend should connect to: http://localhost:${PORT}\n`);
});
