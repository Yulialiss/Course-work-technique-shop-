import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg p-5 border-0">
            <h1 className="text-center display-4 fw-bold">Про нас</h1>
            <p className="text-muted text-center fs-5">
              Ласкаво просимо на сторінку нашого проєкту! Ми прагнемо створити якісний та зручний сервіс
              для наших користувачів. Наша команда складається з талановитих розробників, дизайнерів та
              ентузіастів, які працюють над тим, щоб зробити ваш досвід максимально комфортним.
            </p>
            <div className="mt-4">
              <h2 className="text-center">Наша місія</h2>
              <p className="text-muted fs-5">
                Ми прагнемо забезпечити інноваційні рішення та якісний сервіс для наших клієнтів.
                Наші цінності базуються на чесності, надійності та відкритості.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-center">Наша команда</h2>
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">👨‍💻 Іван – Головний розробник</li>
                <li className="list-group-item">🎨 Марія – Дизайнер</li>
                <li className="list-group-item">📢 Олександр – Маркетолог</li>
              </ul>
            </div>
            <div className="mt-4 text-center">
              <button className="bttn about btn-primary">Дізнатися більше</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;