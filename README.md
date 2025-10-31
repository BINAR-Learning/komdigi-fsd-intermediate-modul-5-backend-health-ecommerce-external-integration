# 🌐 health-ecommerce-external-integration

> **External API Integration & AI untuk Health E-Commerce Backend**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)
[![AI](https://img.shields.io/badge/AI-Google_Gemini-orange)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

External API integration dengan Google Gemini AI, Kemenkes API, Midtrans payment, webhooks, dan email notifications untuk production-ready Health E-Commerce.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-external-integration/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── server.js (with TODOs)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── services/ (ai, kemenkes, midtrans)
└── finished-project/    # ✅ Complete implementation
    ├── README.md
    ├── package.json
    ├── server.js (complete)
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── services/
```

**Pilih mana?**

- **Starter** - Jika kamu mau **belajar dengan coding** (RECOMMENDED!)
- **Finished** - Jika butuh **reference** atau stuck

---

## 🎯 Apa yang Akan Kamu Pelajari?

**Modul 5** melanjutkan dari Modul 4 (Security) dengan menambahkan external integrations!

### Konsep yang Dipelajari:

- ✅ **External API Integration** - Consume third-party REST APIs
- ✅ **AI Integration** - Google Gemini untuk intelligent chatbot
- ✅ **Payment Gateway** - Midtrans untuk secure payments
- ✅ **Webhooks** - Handle async event notifications
- ✅ **Error Handling** - Retry mechanisms & fallbacks
- ✅ **Rate Limiting** - Prevent API abuse

### Apa yang Dibangun:

- **AI Chatbot** - Context-aware product recommendations
- **Payment Processing** - Secure transaction flow
- **External Data Sync** - Government health APIs
- **Email Notifications** - Order confirmations
- **Webhook Handlers** - Event-driven architecture

**Output:** Production-ready integrated backend with AI & payments! 🎉

---

## 🔧 Prerequisites

- **Node.js** (v18+)
- **MongoDB** (lokal atau Atlas)
- **Postman** untuk testing
- **API Keys** untuk Gemini AI & Midtrans (sandbox OK)
- **Understanding** Express, MongoDB, JWT dari Modul 1-4

---

## 🚀 Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/health-ecommerce-external-integration.git

# 2. Masuk ke folder repository
cd health-ecommerce-external-integration

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install

# 5. Copy .env.example jadi .env
cp .env.example .env
# Windows: Copy-Item .env.example .env

# 6. Edit .env dengan text editor
# Set MONGODB_URI, JWT_SECRET, dan API keys

# 7. Start MongoDB
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 8. Start server
npm run dev

# Server running di http://localhost:3000
```

### Option 2: Lihat Complete Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-external-integration.git

# 2. Masuk ke folder repository
cd health-ecommerce-external-integration

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Setup .env
cp .env.example .env
# Edit dengan MongoDB URI dan API keys

# 6. Start MongoDB
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 7. Start server
npm run dev

# API complete dengan AI, payment, dan webhook ready! ✅
```

### Contoh konfigurasi `.env`

```env
# Previous configs (dari Modul 1-4)
MONGODB_URI=mongodb://localhost:27017/health-ecommerce
JWT_SECRET=your-secret-key

# New - External APIs
GOOGLE_AI_API_KEY=your_gemini_api_key
KEMENKES_API_URL=https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1
KEMENKES_API_KEY=your_kemenkes_key
MIDTRANS_SERVER_KEY=your_midtrans_server_key
```

---

## 📁 Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── package.json           # Dependencies
├── server.js             # ⚠️ TODO: Server setup
├── config/
│   └── database.js       # ✅ MongoDB connection (ready!)
├── controllers/
│   └── aiController.js    # ⚠️ TODO: AI endpoints
├── middleware/
│   ├── auth.js           # ✅ JWT verification (ready!)
│   └── authorize.js      # ✅ RBAC middleware (ready!)
├── models/
│   └── Product.js        # ✅ Product schema (ready!)
├── routes/
│   └── externalRoutes.js # ⚠️ TODO: External API routes
└── services/             # ⚠️ TODO: External integrations
    ├── aiService.js       # Gemini AI integration
    ├── kemenkesService.js # Kemenkes API
    └── midtransService.js # Payment gateway
```

**TODOs:**

- [ ] `server.js` - Setup Express app, mount external routes
- [ ] `services/aiService.js` - Implement Gemini integration
- [ ] `services/kemenkesService.js` - Kemenkes API client
- [ ] `services/midtransService.js` - Payment gateway
- [ ] `controllers/aiController.js` - AI endpoints
- [ ] `routes/externalRoutes.js` - External API routes

---

## 📁 Struktur Finished Project

```
finished-project/
├── README.md              # Setup + explanations
├── package.json           # Dependencies
├── server.js             # ✅ Complete integrated server
├── config/
│   └── database.js       # ✅ MongoDB connection
├── controllers/
│   └── aiController.js    # ✅ All AI endpoints
├── middleware/
│   ├── auth.js           # ✅ JWT verification
│   └── authorize.js      # ✅ RBAC middleware
├── models/
│   └── Product.js        # ✅ Product schema
├── routes/
│   └── externalRoutes.js # ✅ External API routes mounted
└── services/             # ✅ All integrations complete
    ├── aiService.js       # Gemini AI working
    ├── kemenkesService.js # Kemenkes API functional
    └── midtransService.js # Payment gateway integrated
```

**All implemented:**

- ✅ Google Gemini AI chatbot working
- ✅ Kemenkes API sync functional
- ✅ Midtrans payment sandbox integrated
- ✅ Webhook handlers implemented
- ✅ Retry mechanisms for failed calls
- ✅ Rate limiting configured
- ✅ Error handling comprehensive

## 🐛 Troubleshooting

### Error: "Invalid Google API Key"

**Solusi:**

- Check GOOGLE_AI_API_KEY di `.env`
- Verify key active di Google AI Studio
- Test key di browser/Postman first

### Error: "Gemini API Timeout"

**Solusi:**

- Increase timeout (default 30s)
- Check internet connection
- Reduce context size (fewer products)

### Error: "Rate Limit Exceeded"

**Solusi:**

- Wait for rate limit window to reset
- Implement caching untuk reduce calls
- Use cheaper AI models

### AI Recommendations Empty

**Solusi:**

- Check products ada di database
- Verify product names mentioned dalam AI response
- Improve extraction logic

---

## 🧪 Testing External Integrations

### Test AI Chatbot

```bash
curl -X POST http://localhost:3000/api/ai/ask \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Vitamin apa yang bagus untuk daya tahan tubuh?"
  }'
```

### Test Payment

```bash
curl -X POST http://localhost:3000/api/payments/create \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "ORDER-123",
    "amount": 150000,
    "items": [
      {
        "id": "prod-1",
        "name": "Vitamin C",
        "price": 150000,
        "quantity": 1
      }
    ]
  }'
```

---

## 🔗 Hubungan dengan Modul Lain

**Dari Modul 1 (OOP):**

- ✅ Service layer patterns
- ✅ Async/await untuk external API calls

**Dari Modul 2 (Database):**

- ✅ Product model untuk AI recommendations
- ✅ Database untuk cache external data

**Dari Modul 3 (Express API):**

- ✅ Routes structure
- ✅ Middleware chain
- ✅ Controllers pattern

**Dari Modul 4 (Security):**

- ✅ JWT authentication
- ✅ Protected API endpoints
- ✅ Secure API key management

**Modul 5 (This!)** → Adds External Integrations

- 🆕 Google Gemini AI chatbot
- 🆕 Payment gateway (Midtrans)
- 🆕 External data APIs (Kemenkes)
- 🆕 Webhook handling
- 🆕 Email notifications

**Ke Frontend (Next!):**

- → Complete backend dengan AI & payments
- → Production-ready API untuk React frontend

**One Health E-Commerce system, built progressively!**

---

## 💡 Tips Sukses

1. **Start dengan starter-project** - Practice makes perfect!
2. **Setup API keys early** - Get Gemini & Midtrans sandbox keys ready
3. **Test incrementally** - Test each integration separately
4. **Use Postman** - Organize external API tests in collections
5. **Monitor rate limits** - Track API quota usage
6. **Compare when stuck** - Check finished-project
7. **Understand, don't copy** - Type code yourself
8. **Read API docs** - Each service has specific requirements

---

## 📚 Resources

**Documentation:**

- [Google AI Studio](https://ai.google.dev/)
- [Kemenkes Satu Sehat](https://satusehat.kemkes.go.id/)
- [Midtrans Documentation](https://docs.midtrans.com/)
- [Axios Documentation](https://axios-http.com/)

**Tools:**

- [Postman](https://www.postman.com/) - API testing
- [Google AI Studio](https://makersuite.google.com/app/apikey) - Get Gemini API key
- [Midtrans Dashboard](https://dashboard.sandbox.midtrans.com/) - Payment sandbox
- [Webhook.site](https://webhook.site/) - Test webhooks locally

---

## 🧾 Penutup / Summary – External API Integration

### 🧩 Ringkasan Poin Utama

Modul 5 mengintegrasikan Health E-Commerce dengan external services real-world, mencakup Google Gemini AI, Kemenkes API, Midtrans payment, dan webhook handling.

Peserta kini mampu:

- Integrate AI untuk enhance user experience
- Consume government APIs untuk official data
- Process payments secara secure
- Handle async events dengan webhooks
- Build production-ready integrated systems

### 🎯 Kaitan dengan Tujuan Pembelajaran

| Tujuan          | Pencapaian                                                 |
| --------------- | ---------------------------------------------------------- |
| AI Integration  | Google Gemini chatbot dengan context-aware recommendations |
| External APIs   | Kemenkes API untuk health product data                     |
| Payment Gateway | Midtrans sandbox implementation dengan webhook             |
| Error Handling  | Retry mechanisms, fallbacks, comprehensive logging         |

### 💭 Refleksi Akhir

**"Bagaimana AI chatbot dapat meningkatkan user experience di Health E-Commerce?"**

**"Apa challenges terbesar saat integrate external APIs? How to handle failures gracefully?"**

**"Kapan sebaiknya menggunakan synchronous vs asynchronous patterns untuk external API calls?"**

### 📘 Glosarium

| Istilah          | Definisi                                   |
| ---------------- | ------------------------------------------ |
| **External API** | Third-party service diakses via HTTP       |
| **Webhook**      | HTTP callback untuk event notifications    |
| **Gemini**       | Google's advanced AI model                 |
| **FHIR**         | Fast Healthcare Interoperability Resources |
| **Retry Logic**  | Automatic retry untuk failed operations    |
| **Sandbox**      | Test environment untuk payment APIs        |

### 💬 Kalimat Penutup

Dengan menyelesaikan modul ini, peserta telah memahami **external API integration fundamentals**.

Selanjutnya, peserta akan mempelajari **Frontend Development dengan React** untuk membangun beautiful UI yang consume backend APIs ini.

---

**Happy Integrating! 🌐🤖💳**

_Disusun oleh Pusbang Talenta Digital_

---

## 🚀 Next Steps

After completing this module:

1. ✅ **Test all external endpoints** dengan Postman
2. ✅ **Verify AI chatbot** returns proper recommendations
3. ✅ **Test payment flow** di Midtrans sandbox
4. ✅ **Monitor webhook** handling untuk payment events
5. ➡️ **Frontend Track** - React development dengan backend integration

---

**Happy Coding! 🌐🤖💳**

_Part of Health E-Commerce Backend Series_  
_Modul 5 - External API Integration & AI_
