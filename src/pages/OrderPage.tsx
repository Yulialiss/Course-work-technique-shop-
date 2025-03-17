import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      name,
      phone,
      address,
      items: cart.map(item => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price
      })),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Помилка при оформленні замовлення");
      }

      clearCart();
      alert("Замовлення оформлено!");
      navigate("/");

    } catch (error) {
      console.error("Помилка:", error);
      alert("Сталася помилка при оформленні замовлення. Спробуйте ще раз.");
    }
  };

  return (
    <div className="container mt-4">
      <h1>Оформлення замовлення</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Ім'я</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Телефон</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Адреса</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Оформляється..." : "Підтвердити замовлення"}
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
