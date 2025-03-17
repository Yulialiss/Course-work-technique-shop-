import React, { useState } from "react";  
import { useAuth } from "../context/AuthContext";  
import { useNavigate } from "react-router-dom";  
import "../styles/Register.css"; // Імпорт CSS-файлу  

const Register: React.FC = () => {  
  const { register } = useAuth();  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [role, setRole] = useState("student");  
  const navigate = useNavigate();   

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    register(email, password, role);  
    navigate("/");   
  };  

  return (  
    <div className="register-container">  
      <h1>Реєстрація</h1>  
      <form onSubmit={handleSubmit} className="register-form">  
        <input  
          type="email"  
          placeholder="Email"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          className="register-input"  
        />  
        <input  
          type="password"  
          placeholder="Пароль"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          className="register-input"  
        />  
        <select value={role} onChange={(e) => setRole(e.target.value)} className="register-select">  
          <option value="student">Студент</option>  
          <option value="teacher">Вчитель</option>  
        </select>  
        <button type="submit" className="register-button">Зареєструватися</button>  
      </form>  
    </div>  
  );  
};  

export default Register;