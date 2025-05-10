# ❄️ WhatsApp Chatbot – Elegan & Kawaii Style (Sariphi Edition)

**Chatbot WhatsApp**

---

## ✨ Fitur Utama
- Terhubung langsung ke **Meta WhatsApp API**  
- Menjawab pesan secara otomatis dan cepat  
- Cocok untuk chatbot AI, notifikasi, atau sistem pelanggan  
- Ringan, elegan, dan siap deploy ke **Vercel**  
- Dibangun tanpa Python (no `app.py`!) – hanya **Node.js murni**

---

## ☁️ Cara Pakai (Awan Panduan)
1. **Clone** atau **download** project ini dari GitHub  
2. Salin `.env.example` menjadi `.env` lalu isi sesuai data API-mu  
3. Pastikan akun **Meta for Developers**-mu sudah diatur:
   - Nomor ID WhatsApp
   - Page Access Token
   - Verify Token (bebas, tapi harus sama saat setting Webhook)

4. Deploy ke **Vercel** dan atur environment variables berikut:
   - `PAGE_ACCESS_TOKEN` = token halamanmu
   - `VERIFY_TOKEN` = token rahasia untuk verifikasi webhook
   - `NUMBER_ID` = ID nomor WhatsApp bisnis
   - `PORT` = `3000` (bisa juga diatur otomatis oleh Vercel)

---

## 🕊️ Struktur Project
