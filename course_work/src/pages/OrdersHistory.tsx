import React, { useEffect, useState } from "react";

interface IOrderItem {
  productId: { name: string };
  quantity: number;
  price: number;
}

interface IOrder {
  _id: string;
  name: string;
  phone: string;
  address: string;
  total: number;
  createdAt: string;
  items: IOrderItem[];
}

const OrdersHistory: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");
        const data = await response.json();
        if (response.ok) {
          setOrders(data.orders);
        } else {
          alert("Не вдалося завантажити історію замовлень");
        }
      } catch (error) {
        console.error("Помилка при отриманні історії замовлень:", error);
        alert("Сталася помилка при завантаженні історії замовлень");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Історія замовлень</h1>
      <div>
        {orders.length === 0 ? (
          <p>У вас немає замовлень.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order._id}>
                <h5>Замовлення #{order._id}</h5>
                <p>Дата: {new Date(order.createdAt).toLocaleDateString()}</p>
                <p>Загальна сума: {order.total} грн</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.productId.name} - {item.quantity} x {item.price} грн
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrdersHistory;
