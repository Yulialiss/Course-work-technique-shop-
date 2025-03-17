import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1>Кошик</h1>
      {cart.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.price} грн x {item.quantity}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 d-flex justify-content-between">
            <button className="btn btn-warning" onClick={clearCart}>
              Очистити кошик
            </button>
            <button className="btn btn-success" onClick={() => navigate("/order")}>
              Оформити замовлення
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
