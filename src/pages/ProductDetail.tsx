import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import '../styles/ProductDetail.css';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProductById(id)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Помилка при отриманні продукту:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p className="loading">Завантаження...</p>;
  }

  if (!product) {
    return <p className="not-found">Продукт не знайдений</p>;
  }

  return (
    <div className="container mt-4">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <div className="product-description">
        <p>{product.description}</p>
        <p>Колір: {product.color}</p>
        <p>{product.price} грн</p>
      </div>
    </div>
  );
};

export default ProductDetail;
