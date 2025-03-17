import React from "react";  
import '../styles/Footer.css'; // Правильний шлях до стилю  

const Footer: React.FC = () => {  
  return (  
    <footer className="footer">  
      <div className="container text-center">  
        <p className="footer-text mb-1">  
          &copy; {new Date().getFullYear()} Магазин. Усі права захищені.  
        </p>  
        <ul className="footer-menu">  
          <li>  
            <a href="/about" className="footer-link">Про нас</a>  
          </li>  
          <li>  
            <a href="/contacts" className="footer-link">Контакти</a>  
          </li>  
          <li>  
            <a href="/privacy" className="footer-link">Політика конфіденційності</a>  
          </li>  
        </ul>  
      </div>  
    </footer>  
  );  
};  

export default Footer;