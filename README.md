# 🚀 Portofolio Pribadi - Next.js & Prisma

Sebuah website portofolio pribadi yang modern dan dinamis, dibangun dengan teknologi web terkini untuk menampilkan proyek, sertifikat, dan keahlian secara elegan.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## ✨ Fitur Utama

- **Portofolio Dinamis**: Semua data proyek dan portofolio diambil langsung dari database PostgreSQL, dikelola dengan mudah melalui Prisma.
- **Antarmuka Modern**: Desain yang bersih dan responsif menggunakan Tailwind CSS.
- **Animasi Halus**: Interaksi pengguna yang diperkaya dengan animasi elegan dari Framer Motion.
- **Struktur Next.js App Router**: Dibangun di atas arsitektur terbaru dari Next.js untuk performa dan pengalaman developer yang optimal.
- **Manajemen Database Kuat**: Skema, migrasi, dan kueri database yang aman dan mudah dikelola berkat Prisma ORM.

---

## 🛠️ Teknologi yang Digunakan

Berikut adalah penjelasan singkat mengenai alat dan teknologi utama yang menjadi fondasi proyek ini:

| Ikon | Teknologi | Peran dalam Proyek |
| :--- | :--- | :--- |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white) | **Next.js** | Kerangka kerja React yang menyediakan rendering sisi server (SSR), pembuatan situs statis (SSG), dan arsitektur App Router. |
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | **React** | Pustaka JavaScript untuk membangun komponen antarmuka pengguna (UI) yang interaktif dan dapat digunakan kembali. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | **TypeScript** | Superset dari JavaScript yang menambahkan tipe data statis, meningkatkan kualitas kode dan mengurangi bug. |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | **Tailwind CSS** | Kerangka kerja CSS *utility-first* untuk membangun desain kustom dengan cepat tanpa meninggalkan HTML Anda. |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) | **Prisma** | ORM (Object-Relational Mapping) modern untuk Node.js dan TypeScript yang menyederhanakan interaksi dengan database. |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white) | **PostgreSQL** | Sistem database relasional objek yang kuat dan canggih, digunakan sebagai penyimpan data utama. |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | **Framer Motion** | Pustaka animasi untuk React yang memudahkan pembuatan animasi yang kompleks dan performan. |
| ![Lucide React](https://img.shields.io/badge/Icons-Lucide-5A67D8?style=flat-square) | **Lucide React** | Pustaka ikon yang komprehensif dan mudah disesuaikan yang digunakan di seluruh antarmuka. |

---

## 🚀 Memulai Proyek

Ikuti langkah-langkah ini untuk menjalankan salinan proyek ini di lingkungan lokal Anda.

### 1. Prasyarat

- Node.js (v18 atau lebih baru)
- npm / yarn / pnpm
- PostgreSQL yang sedang berjalan

### 2. Instalasi

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/username/nama-repo.git
    cd nama-repo
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Siapkan Variabel Lingkungan:**
    Salin file `.env.example` menjadi `.env` dan sesuaikan `DATABASE_URL` jika perlu.
    ```bash
    cp .env.example .env
    ```

4.  **Jalankan Migrasi Database:**
    Perintah ini akan menyinkronkan skema Prisma Anda dengan database PostgreSQL.
    ```bash
    npx prisma migrate dev
    ```

5.  **Jalankan Server Pengembangan:**
    ```bash
    npm run dev
    ```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.