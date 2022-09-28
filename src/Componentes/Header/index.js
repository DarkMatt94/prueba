import React from "react";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <a href="#">
        <div className="logo">
          <img
            src="https://tofuu.getjusto.com/orioneat-prod/kt7ghBhHxCtF8takr-Logo%20Mi%20Market.png"
            alt="logo"
            width="150"
          />
        </div>
      </a>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          <a href="#">NOSOTROS</a>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Buscar..."></input>
      </div>
      <div className="user">
        <box-icon name="user" type="solid"></box-icon>
        <span className="user-name">usuario</span>
      </div>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  );
};
