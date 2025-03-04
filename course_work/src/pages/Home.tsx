import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useCart } from "../context/CartContext";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Отримані продукти:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка при отриманні продуктів:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Магазин техніки</h1>
      {loading ? (
        <p>Завантаження...</p>
      ) : products.length === 0 ? (
        <p>Немає доступних продуктів</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-4">
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} грн</p>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Купити
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
