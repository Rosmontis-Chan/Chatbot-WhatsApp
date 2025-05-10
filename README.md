# Chatbot WhatsApp (Meta API)

**Project Elegan & Kawaii** (Putih dan Biru Style)  
Powered by Node.js + Meta WhatsApp API  
Deploy easily to **Vercel**

## Fitur:
- Terhubung langsung ke WhatsApp API dari Meta
- Menjawab pesan masuk secara otomatis
- Siap deploy ke Vercel (tanpa `app.py`, no Python!)
- Sangat ringan dan simple

## Cara Pakai:
1. Clone atau download project ini
2. Ganti isi file `.env.example` dan simpan sebagai `.env`
3. Pastikan akun Meta Dev-mu sudah diatur dengan:
   - Nomor ID WhatsApp
   - Token API (Page Access Token)
   - Verify Token

4. Deploy ke Vercel dan pasang environment variables:
   - `PAGE_ACCESS_TOKEN`
   - `VERIFY_TOKEN`
   - `NUMBER_ID`
   - `PORT` = `3000`

## Struktur Project
```
├── index.js
├── package.json
├── .env.example
└── README.md
```

### By: Nanami-chan ⸝⸝⸝╸▵╺⸝⸝⸝