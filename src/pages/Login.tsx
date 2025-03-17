import React, { useState } from "react";  
import { useAuth } from "../context/AuthContext";  
import { useNavigate } from "react-router-dom";  
import "../styles/Login.css"; // Додайте імпорт CSS-файлу  

const Login: React.FC = () => {  
  const { login } = useAuth();  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();   

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    login(email, password);   
    navigate("/");   
  };  

  return (  
    <div className="login-container">  
      <h1>Вхід до системи</h1>  
      <form onSubmit={handleSubmit} className="login-form">  
        <input  
          type="email"  
          placeholder="Email"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          className="login-input"  
        />  
        <input  
          type="password"  
          placeholder="Пароль"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          className="login-input"  
        />  
        <button type="submit" className="login-button">Увійти</button>  
      </form>  
    </div>  
  );  
};  

export default Login;