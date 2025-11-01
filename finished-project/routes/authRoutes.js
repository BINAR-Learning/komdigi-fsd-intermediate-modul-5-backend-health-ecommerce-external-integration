/**
 * Auth Routes
 * Routes untuk authentication: register, login, profile
 * Dari Modul 4: Authentication
 */

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { authenticateToken } = require("../middleware/auth");

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes
router.get("/profile", authenticateToken, authController.getProfile);

module.exports = router;

