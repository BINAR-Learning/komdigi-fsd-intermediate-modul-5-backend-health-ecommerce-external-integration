# ✅ Health E-Commerce: ULTIMATE Backend (Complete)

> **🌟 THE COMPLETE BACKEND - Use this for ALL Frontend & Common Modules!**  
> **Production-Ready dengan ALL Features dari Modul 1-5**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)
[![AI](https://img.shields.io/badge/Google-Gemini_AI-orange)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

**Complete implementation** Health E-Commerce backend dengan integrasi Google Gemini AI, Kemenkes API, dan Midtrans Payment Gateway.

---

## 🎉 Apa yang Ada di Repo Ini?

Repository ini adalah **ULTIMATE BACKEND** - kombinasi lengkap dari **SEMUA Backend Modul 1-5**!

**🌟 INI ADALAH THE BACKEND yang akan digunakan untuk:**

- ✅ **Frontend Modul 1-3** - React, Next.js, UI/UX
- ✅ **Common Modul 1-2** - Testing, GitHub Workflow
- ✅ **Final Project** - Complete MERN integration

**Complete API Features (dari 5 Backend Modules):**

### From Modul 1-2: Database Layer

- ✅ **Product Model** - Complete dengan validations
- ✅ **User Model** - Dengan bcrypt hashing
- ✅ **MongoDB Integration** - Ready to use

### From Modul 3: REST API

- ✅ **CRUD Products** - GET, POST, PUT, DELETE dengan filtering & search
- ✅ **Middleware System** - CORS, logging, error handling
- ✅ **Query Support** - Filter by category, price range, search

### From Modul 4: Security

- ✅ **JWT Authentication** - Register, login, protected routes
- ✅ **RBAC** - Admin vs User role-based access
- ✅ **Password Hashing** - Bcrypt dengan salt rounds 10
- ✅ **Security Headers** - Helmet, rate limiting, sanitization

### From Modul 5: External Integrations

- ✅ **AI Chatbot** - Google Gemini untuk health recommendations (with caching!)
- ✅ **Kemenkes API** - Official government health data
- ✅ **Midtrans Payment** - Payment gateway dengan webhook handling
- ✅ **Email Service** - Auto-send notifications
- ✅ **Advanced Features** - Retry logic, rate limiting, signature verification

---

## 🚀 Quick Start (Untuk Newbie)

### Step 1: Clone Repository

```bash
# Clone repository ini
git clone https://github.com/your-username/health-ecommerce-ai-complete.git

# Masuk ke folder project
cd health-ecommerce-ai-complete
```

### Step 2: Install Dependencies

```bash
# Install semua package yang dibutuhkan
npm install

# Tunggu sampai selesai (biasanya 1-2 menit)
```

### Step 3: Setup Database

**Start MongoDB:**

```bash
# Check apakah MongoDB running
mongosh

# Jika belum, start MongoDB:
# Windows: Services → Start "MongoDB Server"
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

**Database akan auto-create saat server pertama kali running.**

### Step 4: Seed Database (Populate Sample Data)

**Sebelum testing API, isi database dengan sample data untuk testing:**

```bash
# Jalankan seeder untuk membuat products dan users
npm run seed
```

**Seeder akan membuat:**

- ✅ **37 Products** - Lengkap dengan berbagai kategori:

  - 9 Vitamins (Vitamin C, D3, B Complex, Multivitamin, dll)
  - 8 Supplements (Omega-3, Probiotik, Collagen, Magnesium, dll)
  - 8 Medicines (Paracetamol, Amoxicillin, Ibuprofen, dll)
  - 10 Medical Equipment (Thermometer, BP Monitor, Nebulizer, dll)

- ✅ **17 Users** - Siap untuk login testing:
  - **2 Admin Users**:
    - `aiman@example.com` / `Aiman123!`
    - `admin@healthstore.com` / `Admin123!`
  - **15 Regular Users**:
    - `aila@example.com` / `Aila123!`
    - `user@example.com` / `User123!`
    - `budi@example.com` / `Budi123!`
    - `siti@example.com` / `Siti123!`
    - `andi@example.com` / `Andi123!`
    - `rina@example.com` / `Rina123!`
    - `dedi@example.com` / `Dedi123!`
    - `lisa@example.com` / `Lisa123!`
    - `fajar@example.com` / `Fajar123!`
    - `maya@example.com` / `Maya123!`
    - `eko@example.com` / `Eko123!`
    - `indah@example.com` / `Indah123!`
    - `hadi@example.com` / `Hadi123!`
    - `citra@example.com` / `Citra123!`
    - ... dan lainnya

**Expected Output:**

```
🗑️  Clearing old data...
✅ Old data cleared

📦 Creating products...
✅ 37 products created

👥 Creating users...
✅ 17 users created

📋 Test Users for Login:

   🔐 ADMIN USERS:
   - Aiman (aiman@example.com) / Aiman123!
   - Admin Health (admin@healthstore.com) / Admin123!

   👤 REGULAR USERS:
   - Aila (aila@example.com) / Aila123!
   - User Test (user@example.com) / User123!
   ... and 13 more users

📊 Summary:
   ✅ 37 products created
   ✅ 17 users created
      - 2 admin users
      - 15 regular users

🎉 Database seeding complete!
```

**💡 Tips:**

- Seeder akan **clear existing data** terlebih dahulu
- Password sudah di-hash dengan bcrypt (aman)
- Semua users memiliki phone dan address lengkap
- Gunakan kredensial ini untuk testing login/authentication

**Alternatif Seeder:**

```bash
# Seed hanya vitamins saja (tanpa clear data)
npm run seed:vitamins
```

### Step 5: Setup Environment Variables

```bash
# Copy file .env.example jadi .env
cp .env.example .env

# Windows (PowerShell):
Copy-Item .env.example .env
```

**Edit file `.env` dengan API keys kamu:**

```env
# === Server Configuration ===
NODE_ENV=development
PORT=3000

# === Database (dari Modul 2) ===
MONGODB_URI=mongodb://localhost:27017/health-ecommerce

# === JWT (dari Modul 4) ===
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h

# === Google Gemini AI (GRATIS!) ===
# Get from: https://ai.google.dev/
GOOGLE_AI_API_KEY=AIza...your-key-here

# === Kemenkes API (Optional) ===
KEMENKES_API_URL=https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1
KEMENKES_API_KEY=your-kemenkes-key

# === Midtrans Payment (Sandbox - GRATIS!) ===
# Get from: https://dashboard.sandbox.midtrans.com/
MIDTRANS_SERVER_KEY=SB-Mid-server-...
MIDTRANS_CLIENT_KEY=SB-Mid-client-...
MIDTRANS_IS_PRODUCTION=false

# === Email (Optional) ===
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**💡 Get API Keys (5-10 menit):**

**Google Gemini:**

1. → https://ai.google.dev/
2. Click "Get API Key"
3. Sign in dengan Google
4. Create project & generate key
5. Copy & paste to `.env`

**Midtrans Sandbox:**

1. → https://dashboard.sandbox.midtrans.com/
2. Register & verify email
3. Login → Settings → Access Keys
4. Copy Server Key & Client Key
5. Paste to `.env`

### Step 6: Start Server

```bash
# Jalankan server dalam development mode
npm run dev

# Server akan running di http://localhost:3000
```

**Expected Output:**

```
🚀 Server running on port 3000
✅ MongoDB Connected: localhost
📍 Health check: http://localhost:3000/health
💻 Environment: development
🤖 AI Service initialized
💳 Payment Gateway ready
```

### Step 7: Test Complete API

**✅ SEMUA ENDPOINTS DARI MODUL 1-5 TERSEDIA!**

Frontend & Common modules akan use endpoints ini untuk practice!

**1. Health Check:**

```bash
curl http://localhost:3000/health
```

**2. Get JWT Token (Login):**

```bash
# Login dengan user dari seeder
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aila@example.com","password":"Aila123!"}'

# Atau login sebagai admin
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aiman@example.com","password":"Aiman123!"}'

# Save the token yang dikembalikan!
```

**3. Test AI Chatbot:**

```bash
curl -X POST http://localhost:3000/api/external/ai/ask \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{"question":"Vitamin apa yang bagus untuk imun tubuh?"}'
```

**Expected Response:**

```json
{
  "success": true,
  "answer": "Untuk meningkatkan daya tahan tubuh, saya rekomendasikan...",
  "recommendedProducts": [
    {
      "productId": "...",
      "name": "Vitamin C 1000mg",
      "category": "Vitamin",
      "price": 85000
    }
  ]
}
```

**4. Test Kemenkes API:**

```bash
curl http://localhost:3000/api/external/kemenkes/medications?search=paracetamol \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**5. Test Payment:**

```bash
curl -X POST http://localhost:3000/api/external/payment/create \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {"id":"1","name":"Vitamin C","price":85000,"quantity":2}
    ]
  }'
```

**Response:**

```json
{
  "success": true,
  "orderId": "ORDER-1234567890-abc",
  "paymentToken": "66e4fa55-fdac-4ef9-91b5-733b97d1b862",
  "redirectUrl": "https://app.sandbox.midtrans.com/snap/v2/vtweb/..."
}
```

Open `redirectUrl` di browser untuk simulasi payment!

---

## 📁 Struktur Project

```
health-ecommerce-ai-complete/
├── README.md                    # 📖 Ini file yang sedang kamu baca
├── package.json                 # Dependencies & scripts
├── .env.example                 # Template environment variables
├── .gitignore                   # Files to ignore
├── server.js                    # ✅ Complete server setup
│
├── config/
│   └── database.js             # ✅ MongoDB connection (working)
│
├── controllers/
│   └── aiController.js         # ✅ AI chatbot controller (complete)
│
├── middleware/
│   ├── auth.js                 # ✅ JWT authentication
│   └── authorize.js            # ✅ RBAC authorization
│
├── models/
│   └── Product.js              # ✅ Product schema (dengan kemenkesId)
│
├── routes/
│   └── externalRoutes.js       # ✅ Complete routes (AI, Kemenkes, Payment)
│
└── services/
    ├── aiService.js            # ✅ Google Gemini (with caching!)
    ├── kemenkesService.js      # ✅ Kemenkes API (with FHIR transform)
    └── midtransService.js      # ✅ Payment gateway (with webhook)
```

**Legend:**

- ✅ = Complete implementation & tested
- 🆕 = New in this module
- 🔒 = Security-critical code

---

## 🗺️ Complete API Endpoints

### Authentication (dari Modul 4)

```
POST   /api/auth/register      # Register user
POST   /api/auth/login         # Login & get JWT
GET    /api/auth/profile       # Get user profile
```

### Products (dari Modul 2-3)

```
GET    /api/products           # Get all products
GET    /api/products/:id       # Get product by ID
POST   /api/products           # Create product (Admin)
PUT    /api/products/:id       # Update product (Admin)
DELETE /api/products/:id       # Delete product (Admin)
```

### External Integrations (Modul 5) 🆕

```
POST   /api/external/ai/ask                    # AI chatbot
GET    /api/external/kemenkes/medications      # Kemenkes data
POST   /api/external/kemenkes/sync             # Sync to DB (Admin)
POST   /api/external/payment/create            # Create payment
POST   /api/external/payment/webhook           # Payment callback
```

**Total: 13 endpoints** - Complete Health E-Commerce API!

---

## 🌟 Key Features Implementation

### 1. AI Chatbot (Google Gemini)

**File:** `services/aiService.js`

**Features:**

- ✅ Context-aware prompts dengan product database
- ✅ Response parsing & product extraction
- ✅ Caching (reduce costs!)
- ✅ Error handling & fallbacks
- ✅ Rate limiting (10 requests/15min)

**Example Usage:**

```javascript
const aiService = require("./services/aiService");

const result = await aiService.getHealthRecommendation(
  "Vitamin untuk daya tahan tubuh?"
);

console.log(result.answer);
console.log(result.recommendedProducts);
```

### 2. Kemenkes API Integration

**File:** `services/kemenkesService.js`

**Features:**

- ✅ FHIR data transformation
- ✅ Duplicate detection (by kemenkesId)
- ✅ Auto-sync to MongoDB
- ✅ Retry logic for failures

**Example Usage:**

```javascript
const kemenkesService = require("./services/kemenkesService");

// Sync official data
const result = await kemenkesService.syncToDatabase();
console.log(`Synced ${result.newProducts} products`);
```

### 3. Midtrans Payment Gateway

**File:** `services/midtransService.js`

**Features:**

- ✅ Snap API integration
- ✅ Webhook handling
- ✅ Signature verification (SHA512)
- ✅ Transaction status parsing
- ✅ Email notifications

**Example Payment Flow:**

```javascript
const midtransService = require('./services/midtransService');

// Create payment
const payment = await midtransService.createTransaction({
  orderId: 'ORDER-123',
  amount: 170000,
  customerEmail: 'user@example.com',
  items: [...]
});

// User pays at: payment.redirectUrl
// Midtrans sends webhook → We update order status
```

---

## 🆚 Perbedaan dengan Starter Version

| Aspect             | Starter               | Finished (Ini!)                 |
| ------------------ | --------------------- | ------------------------------- |
| **AI Service**     | ⚠️ Boilerplate + TODO | ✅ Complete dengan caching      |
| **Kemenkes**       | ⚠️ Empty functions    | ✅ FHIR transformation working  |
| **Midtrans**       | ⚠️ Template code      | ✅ Full payment flow + webhook  |
| **Routes**         | ⚠️ Commented out      | ✅ All mounted & protected      |
| **Error Handling** | ⚠️ Basic              | ✅ Comprehensive dengan logging |
| **Testing**        | ❌ No examples        | ✅ Complete curl examples       |
| **Documentation**  | ⚠️ Minimal            | ✅ Complete with examples       |

**Use finished when:**

- ✅ Butuh reference implementation
- ✅ Mau lihat best practices
- ✅ Debugging starter code
- ✅ Learning production patterns

**Use starter when:**

- 📝 Mau practice coding
- 📝 Belajar step-by-step
- 📝 Build from scratch

---

## 🐛 Troubleshooting

### ❌ "GOOGLE_AI_API_KEY not set"

**Solusi:**

1. Check `.env` file exists
2. Verify `GOOGLE_AI_API_KEY=...` ada di `.env`
3. Restart server: `Ctrl+C` → `npm run dev`

### ❌ "AI service timeout"

**Solusi:**

- Check internet connection
- Reduce product context (max 30 products)
- Increase timeout di `aiService.js`:

```javascript
timeout: 30000; // 30 seconds
```

### ❌ "Invalid Midtrans signature"

**Solusi:**

1. Pastikan pakai **sandbox** key
2. Check signature calculation di `midtransService.js`
3. Format: `SHA512(orderId+statusCode+grossAmount+serverKey)`

### ❌ "MongoDB connection failed"

**Solusi:**

```bash
# Check MongoDB running
mongosh

# Start if not running:
# Windows: Services → MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### ⚠️ Rate Limit Exceeded

**Expected behavior!** AI endpoint limited to 10 requests/15min.

**Solusi:**

- Wait 15 minutes
- Or increase limit di `externalRoutes.js`

---

## 📊 Project Evolution (Modul 1-5)

### Modul 1: JavaScript & OOP

- ✅ Class-based architecture
- ✅ Service layer pattern
- ✅ Helper utilities

### Modul 2: Database

- ✅ Product & User models
- ✅ MongoDB connection
- ✅ Mongoose schemas

### Modul 3: Express API

- ✅ CRUD endpoints
- ✅ Middleware system
- ✅ Error handling

### Modul 4: Authentication

- ✅ JWT auth
- ✅ RBAC
- ✅ Security (OWASP)

### Modul 5: Integration (THIS!)

- ✅ AI chatbot
- ✅ Government API
- ✅ Payment gateway
- ✅ Webhooks
- ✅ Email service

**= COMPLETE PRODUCTION-READY BACKEND!** 🎉

---

## 🧪 Advanced Testing

### Test Webhook Locally

Since Midtrans can't reach localhost, use **ngrok**:

```bash
# Install ngrok
npm install -g ngrok

# Expose localhost
ngrok http 3000

# Copy ngrok URL (e.g., https://abc123.ngrok.io)
# Set di Midtrans dashboard:
# Settings → Webhook URL: https://abc123.ngrok.io/api/external/payment/webhook
```

Now make test payment → Midtrans will call your webhook!

### Load Testing dengan k6

```bash
# Install k6
# Windows: choco install k6
# Mac: brew install k6
# Linux: apt install k6

# Run basic load test
k6 run tests/load-test.js
```

---

## 📚 Learning Resources

**API Docs:**

- [Google Gemini](https://ai.google.dev/docs)
- [Midtrans](https://docs.midtrans.com/)
- [Kemenkes](https://satusehat.kemkes.go.id/platform/docs/)

**Tools:**

- [Postman](https://www.postman.com/) - API testing
- [MongoDB Compass](https://www.mongodb.com/products/compass) - Database GUI
- [ngrok](https://ngrok.com/) - Webhook testing

---

## 🚀 Deployment

Ready untuk production? Deploy ke:

**Railway:**

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

**Heroku:**

```bash
heroku create health-ecommerce-ai
git push heroku main
heroku config:set GOOGLE_AI_API_KEY=...
```

**Vercel:**

```bash
npm install -g vercel
vercel
```

---

## 💡 Best Practices Implemented

1. ✅ **Environment Variables** - All secrets in `.env`
2. ✅ **Error Handling** - Try-catch di semua async functions
3. ✅ **Rate Limiting** - Prevent API abuse
4. ✅ **Caching** - Reduce external API costs
5. ✅ **Retry Logic** - Exponential backoff untuk failures
6. ✅ **Logging** - Comprehensive logs untuk debugging
7. ✅ **Security** - Signature verification, JWT, RBAC
8. ✅ **Validation** - Input validation di semua endpoints

---

## 🆘 Butuh Bantuan?

- **Questions?** Open issue di GitHub
- **Bugs?** Create bug report dengan error logs
- **Improvements?** Submit pull request!

---

**🎉 Congratulations!**

Kamu sekarang punya **complete production-ready backend** dengan:

- AI capabilities
- Government data integration
- Real payment processing
- Production-grade security

**Next:** Build React frontend untuk consume API ini! 🎨

---

**📁 Repository Info:**

- **Name:** `health-ecommerce-ai-complete`
- **Type:** Finished/Reference Implementation
- **Starter Version:** `health-ecommerce-ai-integration`

**Happy Coding! 🚀**

_Modul 5 - External API Integration (Complete)_  
_Health E-Commerce Backend Series_
