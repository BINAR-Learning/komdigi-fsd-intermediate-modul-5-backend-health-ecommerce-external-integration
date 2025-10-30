# 🌐 Modul 5 – Integrasi Layanan Eksternal & AI

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-green)](https://swagger.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

**Unit Kompetensi:** J.620100.019.02 – Menggunakan Library atau Komponen Pre-Existing

---

## 📋 Deskripsi Modul

**Modul terakhir Backend Track!** 🎉

Modul ini mengintegrasikan **Health E-Commerce Backend** (dari Modul 1-4) dengan external services:

- 🤖 **Google Gemini AI** - Chatbot rekomendasi produk
- 🏥 **API Kemenkes** - Official health product data
- 💳 **Midtrans** - Payment gateway
- 📧 **Email Service** - Notifications
- 🔔 **Webhooks** - Event-driven updates

**Catatan:** Project ini **melanjutkan dari Modul 4** (secure API dengan auth). Sekarang tambahkan integrations!

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
Modul_5-External_API_Integration/
├── README.md (file ini)
├── starter-project/              # 📝 Untuk practice (dengan TODO)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/ (ai, kemenkes, midtrans)
│   ├── server.js
│   └── package.json
└── finished-project/             # ✅ Complete implementation
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── server.js
    └── package.json
```

**Pilih mana?**

- **Starter** – Untuk belajar dengan mengerjakan TODO (RECOMMENDED!)
- **Finished** – Untuk referensi saat butuh contoh implementasi lengkap

## 🎯 Tujuan Pembelajaran

1. ✅ Consume external REST APIs
2. ✅ Integrate Google Gemini untuk AI chatbot
3. ✅ Setup Midtrans payment gateway
4. ✅ Handle webhooks dari external services
5. ✅ Implement retry & error handling
6. ✅ Manage rate limits

## 🚀 Quick Start (Untuk Newbie)

### Option 1: Practice dengan Starter Project

```bash
# 1) Masuk ke starter-project
cd starter-project

# 2) Install dependencies
npm install

# 3) Setup environment
Copy-Item .env.example .env   # Windows
# Mac/Linux: cp .env.example .env

# 4) Isi .env dengan credentials (MongoDB, JWT, API keys)

# 5) Start MongoDB (jika lokal)
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 6) Jalankan server
npm run dev
```

### Option 2: Lihat Finished Project (Reference)

```bash
# 1) Masuk ke finished-project
cd finished-project

# 2) Install dependencies
npm install

# 3) Setup environment
Copy-Item .env.example .env   # Windows
# Mac/Linux: cp .env.example .env

# 4) Isi .env dengan credentials yang valid

# 5) Start MongoDB (jika lokal)
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 6) Jalankan server
npm run dev
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

### Langkah 4: Test AI Chatbot

**Via Postman:**

```json
POST http://localhost:3000/api/ai/ask
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "question": "Vitamin apa yang bagus untuk daya tahan tubuh?"
}
```

**Response:**

```json
{
  "success": true,
  "answer": "Untuk meningkatkan daya tahan tubuh, Vitamin C 1000mg sangat direkomendasikan...",
  "recommendedProducts": [
    {
      "id": "...",
      "name": "Vitamin C 1000mg",
      "category": "Vitamin",
      "price": 85000
    }
  ]
}
```

## 📚 Perbedaan Starter vs Finished

### 🏁 Starter Project

**Sudah Ada:**

- ✅ Server structure dari Modul 3 & 4
- ✅ Database models
- ✅ Auth system

**Perlu Dilengkapi:**

- ⚠️ `services/aiService.js` - Gemini integration
- ⚠️ `services/kemenkesService.js` - Kemenkes API
- ⚠️ `services/midtransService.js` - Payment gateway
- ⚠️ `controllers/aiController.js` - AI endpoints
- ⚠️ `routes/aiRoutes.js` - AI routes

### ✅ Finished Project

**Complete dengan:**

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

## 🔗 Integrasi dengan Health E-Commerce

**Modul 5 melengkapi backend dengan:**

- External data sources (Kemenkes)
- Payment processing (Midtrans)
- AI capabilities (Gemini chatbot)
- Production-grade error handling
- Real-world service integrations

**Backend sekarang READY untuk frontend!** 🎨

---

## 🔗 Hubungan dengan Modul Lain

- **Modul 1** → OOP & service patterns mendasari service integrations
- **Modul 2** → Model & schema untuk simpan data eksternal (sync/cache)
- **Modul 3** → Routes/controllers untuk expose endpoints integrasi
- **Modul 4** → Protect kunci API & endpoints dengan auth/authorize/security
- **Modul 5 (This!)** → Tambahkan AI, payment, dan external data sources

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

### 📚 Sumber Referensi

- [Google AI Studio](https://ai.google.dev/)
- [Kemenkes Satu Sehat](https://satusehat.kemkes.go.id/)
- [Midtrans Documentation](https://docs.midtrans.com/)
- [Axios Documentation](https://axios-http.com/)

### 📘 Glosarium

| Istilah          | Definisi                                   |
| ---------------- | ------------------------------------------ |
| **External API** | Third-party service diakses via HTTP       |
| **Webhook**      | HTTP callback untuk event notifications    |
| **Gemini**       | Google's advanced AI model                 |
| **FHIR**         | Fast Healthcare Interoperability Resources |
| **Retry Logic**  | Automatic retry untuk failed operations    |

### 💬 Kalimat Penutup

**BACKEND TRACK COMPLETE!** 🎉

Dengan 5 modul selesai, peserta telah menguasai complete backend development dari OOP fundamentals sampai AI integration!

Selanjutnya: **Frontend Development dengan React** untuk build beautiful UI yang consume backend APIs ini!

---

**Happy Integrating! 🌐🤖💳**

_Disusun oleh Pusbang Talenta Digital_

---

## 🚀 Next Steps

1. ✅ Test AI endpoint (`/api/ai/ask`) dengan JWT valid
2. ✅ Uji integrasi Kemenkes & verifikasi data masuk ke database
3. ✅ Jalankan payment flow Midtrans sandbox sampai webhook diterima
4. ➡️ Integrasikan frontend untuk end-to-end user flow
