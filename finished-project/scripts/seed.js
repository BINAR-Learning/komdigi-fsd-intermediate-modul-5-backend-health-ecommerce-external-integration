require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
const User = require("../models/User");
const connectDB = require("../config/database");

const products = [
  {
    name: "Vitamin C 1000mg",
    description: "Suplemen vitamin C untuk meningkatkan daya tahan tubuh dan antioksidan",
    category: "Vitamin",
    price: 85000,
    stock: 50,
    manufacturer: "PT Sehat Sejahtera",
    imageUrl: "https://via.placeholder.com/400x300?text=Vitamin+C",
  },
  {
    name: "Vitamin D3 2000 IU",
    description: "Suplemen vitamin D untuk kesehatan tulang dan sistem imun",
    category: "Vitamin",
    price: 120000,
    stock: 30,
    manufacturer: "PT Sehat Alami",
    imageUrl: "https://via.placeholder.com/400x300?text=Vitamin+D3",
  },
  {
    name: "Omega-3 Fish Oil 1000mg",
    description: "Minyak ikan untuk kesehatan jantung dan fungsi otak",
    category: "Supplement",
    price: 200000,
    stock: 25,
    manufacturer: "PT Nutri Health",
    imageUrl: "https://via.placeholder.com/400x300?text=Omega+3",
  },
  {
    name: "Multivitamin Complete",
    description: "Multivitamin lengkap untuk kebutuhan harian",
    category: "Vitamin",
    price: 150000,
    stock: 40,
    manufacturer: "PT Aiman Health",
    imageUrl: "https://via.placeholder.com/400x300?text=Multivitamin",
  },
  {
    name: "Probiotik Capsules",
    description: "Probiotik untuk kesehatan pencernaan dan sistem imun",
    category: "Supplement",
    price: 180000,
    stock: 20,
    manufacturer: "PT Bio Health",
    imageUrl: "https://via.placeholder.com/400x300?text=Probiotik",
  },
  {
    name: "Paracetamol 500mg",
    description: "Obat pereda nyeri dan penurun demam",
    category: "Medicine",
    price: 15000,
    stock: 100,
    manufacturer: "PT Kimia Farma",
    imageUrl: "https://via.placeholder.com/400x300?text=Paracetamol",
  },
  {
    name: "Amoxicillin 500mg",
    description: "Antibiotik untuk infeksi bakterial",
    category: "Medicine",
    price: 35000,
    stock: 60,
    manufacturer: "PT Pharma Indo",
    imageUrl: "https://via.placeholder.com/400x300?text=Amoxicillin",
  },
  {
    name: "Thermometer Digital",
    description: "Termometer digital untuk pengukuran suhu tubuh akurat",
    category: "Medical Equipment",
    price: 75000,
    stock: 35,
    manufacturer: "PT Medical Tools",
    imageUrl: "https://via.placeholder.com/400x300?text=Thermometer",
  },
  {
    name: "Blood Pressure Monitor",
    description: "Alat ukur tekanan darah digital untuk home monitoring",
    category: "Medical Equipment",
    price: 450000,
    stock: 15,
    manufacturer: "PT Medical Devices",
    imageUrl: "https://via.placeholder.com/400x300?text=BP+Monitor",
  },
  {
    name: "Vitamin B Complex",
    description: "Kompleks vitamin B untuk energi dan metabolisme",
    category: "Vitamin",
    price: 95000,
    stock: 45,
    manufacturer: "PT Aila Farma",
    imageUrl: "https://via.placeholder.com/400x300?text=B+Complex",
  },
  {
    name: "Glucosamine Chondroitin",
    description: "Suplemen untuk kesehatan sendi dan tulang rawan",
    category: "Supplement",
    price: 250000,
    stock: 18,
    manufacturer: "PT Joint Health",
    imageUrl: "https://via.placeholder.com/400x300?text=Glucosamine",
  },
  {
    name: "Hand Sanitizer 500ml",
    description: "Pembersih tangan antiseptik dengan alkohol 70%",
    category: "Medical Equipment",
    price: 35000,
    stock: 80,
    manufacturer: "PT Hygiene Plus",
    imageUrl: "https://via.placeholder.com/400x300?text=Hand+Sanitizer",
  },
];

const users = [
  {
    name: "Aiman",
    email: "aiman@example.com",
    password: "Aiman123!",
    role: "admin",
    phone: "081234567890",
  },
  {
    name: "Aila",
    email: "aila@example.com",
    password: "Aila123!",
    role: "user",
    phone: "081234567891",
  },
  {
    name: "User Test",
    email: "user@example.com",
    password: "User123!",
    role: "user",
    phone: "081234567892",
  },
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();

    console.log("\n🗑️  Clearing old data...");
    await Product.deleteMany();
    await User.deleteMany();
    console.log("✅ Old data cleared\n");

    // Insert products
    console.log("📦 Creating products...");
    const createdProducts = await Product.insertMany(products);
    console.log(`✅ ${createdProducts.length} products created\n`);

    // Insert users
    console.log("👥 Creating users...");
    const createdUsers = await User.insertMany(users);
    console.log(`✅ ${createdUsers.length} users created\n`);

    // Display sample IDs
    console.log("📋 Sample Product IDs (for testing):");
    createdProducts.slice(0, 3).forEach((product) => {
      console.log(`   - ${product.name}: ${product._id}`);
    });

    console.log("\n📋 Test Users:");
    console.log(`   - Admin: aiman@example.com / Aiman123!`);
    console.log(`   - User:  aila@example.com / Aila123!`);

    console.log("\n🎉 Database seeding complete!");
    console.log("🚀 You can now run: npm run dev\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();

