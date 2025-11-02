const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { authenticateToken } = require("../middleware/auth");
const { authorizeRole } = require("../middleware/authorize");

// Public routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// Admin-only routes
router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  productController.createProduct
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  productController.updateProduct
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  productController.deleteProduct
);

module.exports = router;

