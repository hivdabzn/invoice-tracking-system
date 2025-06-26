import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddInvoice() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newInvoice = {
      ...formData,
      amount: Number(formData.amount),
    };

    try {
      const res = await fetch("http://localhost:3000/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInvoice),
      });

      if (res.ok) {
        navigate("/");
      } else {
        alert("Fatura kaydedilemedi.");
      }
    } catch (error) {
      alert("Sunucuya bağlanılamadı.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Yeni Fatura Ekle</h2>
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default AddInvoice;
