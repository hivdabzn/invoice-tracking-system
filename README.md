# Invoice Tracking System

Bu proje, React + TypeScript + TailwindCSS kullanılarak geliştirilmiş, JSON Server ile backend simülasyonu yapılan, faturaların CRUD (Create, Read, Update, Delete) işlemlerini yapabildiğiniz bir fatura takip uygulamasıdır. Ayrıca faturaları PDF olarak indirmenize imkan verir.

---

## Özellikler

- Fatura listeleme
- Yeni fatura ekleme
- Fatura düzenleme
- Fatura silme
- Toplam tutarı hesaplama ve gösterme
- Fatura listesini PDF olarak indirme
- React Router ile sayfa yönlendirmeleri
- TailwindCSS ile responsive ve şık tasarım
- JSON Server ile basit backend API simülasyonu

---

## Teknolojiler

- React 18 + TypeScript
- React Router Dom
- TailwindCSS
- JSON Server (fake REST API)
- jsPDF + html2canvas (PDF oluşturma)
- Vercel (proje yayınlama)

---

## Kurulum ve Çalıştırma

### 1. Projeyi klonla

```bash
git clone https://github.com/hivdabzn/invoice-tracking-system.git
cd invoice-tracking-system



 Backend kurulumu (JSON Server)

-cd backend
npm install
npm run backend

Frontend kurulumu

-cd ../frontend
npm install
npm run dev

invoice-tracking-system/
├── backend/          # JSON Server backend
│   ├── db.json       # Örnek fatura verileri
│   └── package.json
├── frontend/         # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── InvoiceList.tsx
│   │   │   ├── AddInvoice.tsx
│   │   │   └── EditInvoice.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── tailwind.config.js
│   └── package.json
└── vercel.json       # Vercel SPA yönlendirmesi için config



