# 📦 Fatura Takip Sistemi – A Plus Engineering Vaka Çalışması

Bu proje, A Plus Engineering için geliştirilen uçtan uca bir **Fatura Takip Sistemi**dir. Kullanıcıların fatura **oluşturmasına**, **güncellemesine**, **görüntülemesine** ve **silmesine** olanak tanır.

---

## 🚀 Teknoloji Yığını

### 🔧 Backend
- **Dil:** TypeScript
- **Web Framework:** [Hono](https://hono.dev/)
- **ORM:** [Drizzle](https://orm.drizzle.team/)
- **Veritabanı:** PostgreSQL

### 🎨 Frontend
- **Build Aracı:** Vite
- **Kütüphane:** React
- **Stil:** TailwindCSS

---

## 📌 Özellikler

- Yeni fatura ekleme
- Mevcut faturayı düzenleme
- Tüm faturaları görüntüleme
- Belirli bir faturayı ID ile görüntüleme
- Fatura silme

---

## 🧾 Fatura Veri Modeli

Her bir fatura aşağıdaki alanları içerir:

```ts
{
  id: string; // UUID
  createdAt: Date;
  customerNo: number;
  description: string;
}
```

---

## ⚙️ Kurulum Adımları

### 1️⃣ Projeyi Klonlayın

```bash
git clone https://github.com/kullaniciadiniz/invoice-tracking-system.git
cd invoice-tracking-system
```

---

### 2️⃣ Backend Kurulumu

#### Gerekli Paketleri Yükleyin

```bash
cd backend
npm install
```

#### Ortam Değişkenlerini Ayarlayın

`backend/` klasöründe `.env` dosyası oluşturun:

```
DATABASE_URL=postgresql://kullanici:sifre@localhost:5432/invoicedb
PORT=3000
```

#### Veritabanı Migration'larını Yürütün (Drizzle)

```bash
npx drizzle-kit push
```

#### Backend Sunucusunu Başlatın

```bash
npm run dev
```

---

### 3️⃣ Frontend Kurulumu

```bash
cd ../frontend
npm install
```

#### Frontend’i Başlatın

```bash
npm run dev
```

Uygulama şu adreste çalışacaktır: [http://localhost:5173](http://localhost:5173)

---

## ✅ API Uç Noktaları (Hono)

| Yöntem | Endpoint           | Açıklama                 |
|--------|--------------------|--------------------------|
| GET    | `/invoices`        | Tüm faturaları getirir   |
| GET    | `/invoices/:id`    | Belirli faturayı getirir |
| POST   | `/invoices`        | Yeni fatura oluşturur    |
| PUT    | `/invoices/:id`    | Faturayı günceller       |
| DELETE | `/invoices/:id`    | Faturayı siler           |

---

## 📄 Klasör Yapısı

```
invoice-tracking-system/
│
├── backend/
│   ├── src/
│   └── drizzle.config.ts
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── tailwind.config.ts
│   └── index.html
```

---

## 📝 Notlar

- PostgreSQL'in bilgisayarınızda kurulu ve çalışıyor olması gerekmektedir.
- TailwindCSS yapılandırması `tailwind.config.ts` üzerinden hazır olarak gelmektedir.
- Backend ve frontend farklı portlarda aynı anda çalıştırılabilir.

---

## 🔗 Teslimat

Projeyi tamamladıktan sonra GitHub/GitLab bağlantınızı paylaşmanız yeterlidir:  
👉 `https://github.com/kullaniciadiniz/invoice-tracking-system`

---

## 👩‍💻 Geliştirici

Bu proje **[Hivda Bozan]** tarafından geliştirilmiştir.  

