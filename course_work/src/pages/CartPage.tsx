import React from "react";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

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
          <button className="btn btn-warning mt-3" onClick={clearCart}>
            Очистити кошик
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
