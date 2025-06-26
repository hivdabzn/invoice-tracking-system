import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/add" element={<AddInvoice />} />
        <Route path="/edit/:id" element={<EditInvoice />} />
      </Routes>
    </Router>
  );
}

export default App;
