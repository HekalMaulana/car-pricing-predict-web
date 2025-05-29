# Car Price Prediction Web Application

Aplikasi web untuk memprediksi harga mobil bekas berdasarkan berbagai fitur dan spesifikasi kendaraan. Aplikasi ini menggunakan model machine learning untuk memberikan estimasi harga yang akurat dalam mata uang Rupiah.

## Demo
!(demo preview)[images/demo_preview.png]

## Fitur

- Prediksi harga mobil real-time
- Antarmuka pengguna yang modern dan responsif
- Mendukung berbagai spesifikasi kendaraan
- Hasil prediksi dalam format Rupiah
- Validasi input otomatis
- Penanganan error yang user-friendly

## Teknologi yang Digunakan

### Frontend
- HTML5
- Tailwind CSS
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js
- Python (untuk model prediksi)
- Scikit-learn
- Pandas
- NumPy

## Persyaratan Sistem

- Node.js (v14 atau lebih baru)
- Python (v3.8 atau lebih baru)
- NPM atau Yarn

## Instalasi

1. Clone repositori ini:
```bash
git clone https://github.com/HekalMaulana/car-pricing-predict-web.git
cd car-pricing-predict-web
```

2. Install dependensi Node.js:
```bash
npm install
```

3. Install dependensi Python:
```bash
pip install -r requirements.txt
```

4. Jalankan aplikasi:
```bash
npm start
```

5. Buka browser dan akses:
```
http://localhost:3000
```

## Struktur Proyek

```
car-pricing-predict-web/
├── public/
│   └── car_price.html
├── models/
│   └── car_price.pkl
├── server.js
├── predict_car_price.py
├── requirements.txt
├── package.json
└── README.md
```

## Penggunaan

1. Pilih lokasi penjualan mobil
2. Masukkan tahun produksi
3. Isi detail spesifikasi kendaraan
4. Masukkan informasi kondisi dan penggunaan
5. Klik tombol "Hitung Prediksi Harga"
6. Hasil prediksi akan ditampilkan dalam format Rupiah

## Kontribusi

Silakan berkontribusi untuk pengembangan aplikasi ini. Langkah-langkah kontribusi:

1. Fork repositori
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.