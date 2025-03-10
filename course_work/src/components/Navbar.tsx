import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="/images/logotech.png" alt="Логотип" className="logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Головна</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Про нас</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">Контакти</Link>
            </li>
            <li className="nav-item">
            <Link to="/login">Увійти</Link>
            <Link to="/register">Зареєструватися</Link>
              </li>
          </ul>
          
          
          <div className="d-flex align-items-center">
          
         <Link to="/cart" className="btn btn-primary btn-lg ms-3 position-relative">
              <i className="bi bi-cart-fill"></i>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
