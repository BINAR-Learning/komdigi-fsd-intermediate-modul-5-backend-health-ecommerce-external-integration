# Health E-Commerce API - Postman Collection

Collection lengkap untuk testing semua API endpoints dari Health E-Commerce API.

## 📁 Files

1. **Health-E-Commerce-API.postman_collection.json** - Main Postman collection dengan semua endpoints
2. **Health-E-Commerce-API.postman_environment.json** - Environment variables untuk development

## 🚀 Cara Import

### Via Postman Desktop App:
1. Buka Postman
2. Klik **Import** (kiri atas)
3. Pilih **File** tab
4. Drag & drop atau pilih file `Health-E-Commerce-API.postman_collection.json`
5. Import juga file `Health-E-Commerce-API.postman_environment.json`
6. Pilih environment "Health E-Commerce - Local Development" dari dropdown (kanan atas)

### Via Postman Web:
1. Login ke [postman.com](https://postman.com)
2. Klik **Import**
3. Upload kedua file JSON
4. Select environment yang sudah di-import

## 🔧 Setup Environment

Setelah import, pastikan:

1. **baseUrl** diset ke `http://localhost:5000` (atau sesuai server Anda)
2. Untuk production, ubah ke URL production server
3. Environment variables akan otomatis ter-update setelah login/register berhasil

## 📋 Endpoints yang Tersedia

### 🔐 Authentication
- ✅ **Register User** - Register user baru, token otomatis tersimpan
- ✅ **Register Admin** - Register admin, token tersimpan di `adminToken`
- ✅ **Login** - Login dan dapatkan JWT token
- ✅ **Get Profile** - Get profil user (protected, butuh Bearer Token)

### 📦 Products
- ✅ **Get All Products** - Get semua produk dengan filtering (category, price, search)
- ✅ **Get Product by ID** - Get detail produk
- ✅ **Create Product** - Create produk baru (Admin only)
- ✅ **Update Product** - Update produk (Admin only)
- ✅ **Delete Product** - Delete produk (Admin only)

### 🤖 AI Chatbot
- ✅ **Ask AI** - Tanya AI untuk rekomendasi kesehatan (Rate limited: 10/15min)

### 🏥 Kemenkes Integration
- ✅ **Search Medications** - Search obat dari Kemenkes API (protected)
- ✅ **Sync to Database** - Sync data Kemenkes ke DB (Admin only)

### 💳 Payment (Midtrans)
- ✅ **Create Payment** - Create payment transaction (protected)
- ✅ **Payment Webhook** - Webhook callback dari Midtrans (no auth needed)

### 🏥 Health Check
- ✅ **Health Check** - Check API status

## 🔑 Authentication

### Cara Menggunakan:
1. **Register atau Login** terlebih dahulu
2. Token JWT akan **otomatis tersimpan** di environment variable `authToken`
3. Untuk endpoint yang butuh auth, token akan otomatis digunakan (Bearer Token)
4. Admin endpoints menggunakan `adminToken` dari environment

### Format Token:
```
Authorization: Bearer <your-jwt-token>
```

## 📝 Request Body Examples

### Register
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "Password123!",
  "role": "user",
  "phone": "081234567890",
  "address": "Jl. Merdeka No. 123, Jakarta"
}
```

### Create Product (Admin)
```json
{
  "name": "Vitamin C 1000mg",
  "category": "Vitamin",
  "price": 85000,
  "stock": 50,
  "description": "Suplemen vitamin C untuk meningkatkan daya tahan tubuh",
  "manufacturer": "PT Sehat Sejahtera",
  "kemenkesId": "KEM-123456",
  "isActive": true
}
```

### Payment Create
```json
{
  "orderId": "ORDER-1234567890",
  "customerEmail": "customer@example.com",
  "customerName": "John Doe",
  "amount": 170000,
  "items": [
    {
      "id": "69058b83cc8332efdabe01e2",
      "name": "Vitamin C 1000mg",
      "price": 85000,
      "quantity": 2
    }
  ]
}
```

## 🔄 Auto-Save Token

Collection ini dilengkapi dengan **Test Scripts** yang otomatis menyimpan token setelah:
- Register berhasil → token disimpan di `authToken` atau `adminToken`
- Login berhasil → token disimpan di `authToken` (dan `adminToken` jika role admin)

**Tidak perlu copy-paste token manual!** 🎉

## ⚙️ Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `baseUrl` | Base URL API server | `http://localhost:5000` |
| `authToken` | JWT token untuk user | Auto-filled setelah login |
| `adminToken` | JWT token untuk admin | Auto-filled setelah login admin |
| `userId` | User ID | Auto-filled setelah login |
| `userEmail` | User email | `john.doe@example.com` |
| `userRole` | User role | Auto-filled setelah login |

## 📌 Tips

1. **Test Register/Login dulu** sebelum test endpoint protected
2. **Update productId** di environment jika ingin test dengan product ID yang berbeda
3. **Rate Limiting**: AI endpoint limited 10 requests per 15 minutes
4. **Admin Endpoints**: Pastikan sudah login sebagai admin atau register dengan role `admin`

## 🐛 Troubleshooting

### Token Invalid
- Pastikan sudah login/register terlebih dahulu
- Check apakah token sudah tersimpan di environment variable
- Token mungkin expired (default: 24h), login lagi untuk dapatkan token baru

### 401 Unauthorized
- Pastikan endpoint memerlukan authentication
- Check apakah Bearer Token sudah di-set di request header
- Verify token masih valid

### 403 Forbidden
- Pastikan user memiliki role yang tepat (admin untuk admin endpoints)
- Verify token memiliki role yang sesuai

### 404 Not Found
- Check apakah baseUrl sudah benar
- Verify endpoint path sesuai dengan collection

## 📚 Dokumentasi Lengkap

Untuk dokumentasi API lengkap dengan Swagger, buka:
```
http://localhost:5000/api-docs
```

---

**Happy Testing! 🚀**

