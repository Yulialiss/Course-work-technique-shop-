import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Магазин. Усі права захищені.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/about" className="text-light">Про нас</a>
          </li>
          <li className="list-inline-item">
            <a href="/contacts" className="text-light">Контакти</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy" className="text-light">Політика конфіденційності</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
