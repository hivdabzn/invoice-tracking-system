import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Invoice {
  id: number;
  title: string;
  amount: number;
  date: string;
}

function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // <-- Arama terimi state'i eklendi
  const navigate = useNavigate();
  const pdfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("http://localhost:3000/invoices")
      .then((res) => res.json())
      .then((data) => setInvoices(data))
      .catch((err) => console.error("Veriler alınamadı:", err));
  }, []);

  // Arama kutusunun input değişim fonksiyonu
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/invoices/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setInvoices((prev) => prev.filter((invoice) => invoice.id !== id));
        } else {
          alert("Silinemedi.");
        }
      })
      .catch(() => alert("Bir hata oluştu."));
  };

  const handleDownloadPDF = () => {
    if (!pdfRef.current) return;

    html2canvas(pdfRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("faturalar.pdf");
    });
  };

  // Arama terimine göre filtrelenmiş fatura listesi
  const filteredInvoices = invoices.filter((invoice) =>
    invoice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toplamTutar = filteredInvoices.reduce(
    (toplam, f) => toplam + Number(f.amount),
    0
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-3 sm:space-y-0">
        <h1 className="text-3xl font-bold">Fatura Listesi</h1>

        {/* Arama Kutusu */}
        <input
          type="text"
          placeholder="Fatura başlığı ara..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded px-3 py-1 w-full sm:w-64"
        />

        <div className="space-x-2">
          <button
            onClick={() => navigate("/add")}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            + Yeni Fatura
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            PDF İndir
          </button>
        </div>
      </div>

      <div ref={pdfRef}>
        {filteredInvoices.length === 0 ? (
          <p>Aramanıza uygun fatura bulunamadı.</p>
        ) : (
          <>
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Başlık</th>
                  <th className="border p-2">Tutar</th>
                  <th className="border p-2">Tarih</th>
                  <th className="border p-2 text-center">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="border p-2">{invoice.title}</td>
                    <td className="border p-2">{invoice.amount} ₺</td>
                    <td className="border p-2">{invoice.date}</td>
                    <td className="border p-2 text-center space-x-2">
                      <button
                        onClick={() => navigate(`/edit/${invoice.id}`)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDelete(invoice.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 text-right font-semibold text-xl border-t pt-4 border-gray-300">
              Toplam: {toplamTutar} ₺
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InvoiceList;
