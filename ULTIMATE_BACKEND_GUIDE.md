# 🌟 ULTIMATE BACKEND - Usage Guide

**Repository:** `health-ecommerce-ai-integration`  
**Project:** `finished-project/`  
**Purpose:** THE COMPLETE BACKEND untuk SEMUA Frontend & Common Modules!

---

## 🎯 Mengapa "ULTIMATE BACKEND"?

**Backend Modul 5 finished-project** adalah **gabungan complete features dari Modul 1-5**:

```
Modul 1 (OOP) → ✅ Service architecture
Modul 2 (Database) → ✅ Product & User models
Modul 3 (Express) → ✅ CRUD API + routing
Modul 4 (Auth) → ✅ JWT + RBAC
Modul 5 (Integration) → ✅ AI + Payment + Gov API

= ULTIMATE BACKEND (ALL-IN-ONE) 🌟
```

**Use Case:**
- **Frontend Modul 1-3:** Run this backend for practice  
- **Common Modul 1-2:** Test this backend  
- **Final Project:** Base untuk fullstack integration  

**No need** untuk run backend modules lain! Semua ada di sini! ✅

---

## 📋 Complete API List (13 Endpoints)

**Base URL:** `http://localhost:5000`

### 1. Products (dari Modul 3) - 5 endpoints

```bash
GET    /api/products              # Public - Get all products
GET    /api/products?category=Vitamin&minPrice=50000
GET    /api/products?search=vitamin
GET    /api/products/:id          # Public - Get single product
POST   /api/products              # Admin - Create product
PUT    /api/products/:id          # Admin - Update product
DELETE /api/products/:id          # Admin - Delete product
```

### 2. Authentication (dari Modul 4) - 3 endpoints

```bash
POST   /api/auth/register         # Public - Register user
POST   /api/auth/login            # Public - Login & get token
GET    /api/auth/profile          # Protected - Get profile
```

### 3. External Integrations (dari Modul 5) - 5 endpoints

```bash
POST   /api/external/ai/ask                   # AI Chatbot
GET    /api/external/kemenkes/medications     # Kemenkes data
POST   /api/external/kemenkes/sync            # Sync (Admin)
POST   /api/external/payment/create           # Create payment
POST   /api/external/payment/webhook          # Webhook callback
```

---

## 🚀 Setup untuk Frontend/Common Modules

### For Frontend Students:

```bash
# 1. Clone ULTIMATE backend
git clone https://github.com/your-username/health-ecommerce-ai-integration.git

# 2. Masuk ke finished-project
cd health-ecommerce-ai-integration/finished-project

# 3. Install
npm install

# 4. Setup .env
cp .env.example .env
# Edit: Set MONGODB_URI, GOOGLE_AI_API_KEY (optional for basic usage)

# 5. Seed database
npm run seed

# 6. Start server
npm run dev

# Backend running di http://localhost:5000 ✅
```

**Tetap running** selama develop Frontend/Common modules!

---

## 📦 Seeded Data (Auto-Created)

### Products (12 items):
- Vitamin C 1000mg (Rp 85,000)
- Vitamin D3 2000 IU (Rp 120,000)
- Omega-3 Fish Oil (Rp 200,000)
- Multivitamin Complete (Rp 150,000)
- Probiotik Capsules (Rp 180,000)
- Paracetamol 500mg (Rp 15,000)
- Amoxicillin 500mg (Rp 35,000)
- Thermometer Digital (Rp 75,000)
- Blood Pressure Monitor (Rp 450,000)
- Vitamin B Complex (Rp 95,000)
- Glucosamine Chondroitin (Rp 250,000)
- Hand Sanitizer 500ml (Rp 35,000)

### Users (3 accounts):
1. **Admin Account:**
   - Email: aiman@example.com
   - Password: Aiman123!
   - Role: admin

2. **User Account:**
   - Email: aila@example.com
   - Password: Aila123!
   - Role: user

3. **Test Account:**
   - Email: user@example.com
   - Password: User123!
   - Role: user

---

## 🧪 Quick Test

### Test 1: Get Products (No Auth)

```bash
curl http://localhost:5000/api/products
```

**Expected:** JSON dengan 12 products ✅

### Test 2: Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"aila@example.com","password":"Aila123!"}'
```

**Expected:** JWT token ✅

### Test 3: Protected Route

```bash
curl http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Expected:** User profile ✅

---

## 🎨 For Frontend Modules

**Frontend Modul 1-3 harus:**

1. Connect ke: `http://localhost:5000`
2. Endpoints yang sering dipakai:
   - `GET /api/products` - Product listing
   - `GET /api/products?search=...` - Search
   - `GET /api/products?category=...` - Filter
   - `POST /api/auth/login` - User login
   - `POST /api/external/ai/ask` - AI chatbot

3. Axios setup:
   ```javascript
   const API_BASE_URL = 'http://localhost:5000/api';
   ```

---

## 🧪 For Common/Testing Modules

**Testing Modul akan test endpoints ini:**
- Unit tests untuk individual functions
- Integration tests untuk complete flows
- Playwright untuk UI automation
- k6 untuk load testing

---

## 💡 Troubleshooting

### Port 5000 already in use

```bash
# Option 1: Kill process
# Windows: netstat -ano | findstr :5000
# Mac: lsof -ti:5000 | xargs kill

# Option 2: Change port in .env
PORT=5001
```

### MongoDB connection failed

```bash
# Make sure MongoDB running
mongosh

# If not, start:
# Windows: Services → MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

---

## ✅ Benefits of Using ULTIMATE Backend

1. **One backend untuk ALL** - Tidak confusing
2. **Complete features** - Product, Auth, AI, Payment
3. **Real production simulation** - Complete API like real apps
4. **Ready to use** - Just clone, seed, run!
5. **Consistent** - Same backend untuk consistent learning

---

**🌟 THIS IS THE BACKEND!**

Use untuk Frontend Modul 1, 2, 3 dan Common Modul 1, 2!

_ULTIMATE Backend Guide_  
_Pusbang Talenta Digital - Kominfo_

