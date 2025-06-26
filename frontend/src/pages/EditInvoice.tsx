import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditInvoice() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/invoices/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch(() => alert("Veri alınamadı"));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`http://localhost:3000/invoices/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Fatura güncellendi");
          navigate("/");
        } else {
          alert("Güncellenemedi");
        }
      })
      .catch(() => alert("Hata oluştu"));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Faturayı Düzenle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Fatura Başlığı"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Tutar"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Güncelle
        </button>
      </form>
    </div>
  );
}

export default EditInvoice;
