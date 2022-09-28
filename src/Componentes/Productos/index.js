import React from "react";
import "./index.css";

export const ProductosLista = () => {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div clasName="producto">
          <a href="#">
            <div className="producto__img">
              <img
                src="https://jumbo.vtexassets.com/arquivos/ids/396690/Leche-entera-sin-tapa-1-L.jpg?v=637469297723670000"
                alt="leche_soprole"
                width="100"
              />
            </div>
          </a>
          <div className="producto__footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$320 </p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
          </div>
        </div>
        <div clasName="producto">
          <a href="#">
            <div className="producto__img">
              <img
                src="https://dojiw2m9tvv09.cloudfront.net/24510/product/espiraleslucchetti6860.png"
                alt="espirales_luchetti"
                width="100"
              />
            </div>
          </a>
          <div className="producto__footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$320 </p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
          </div>
        </div>
        <div clasName="producto">
          <a href="#">
            <div className="producto__img">
              <img
                src="https://odoo.sf.cloudccu.cl/web/image?model=product.product&id=1989&field=image_1024"
                alt="pepsi"
                width="100"
              />
            </div>
          </a>
          <div className="producto__footer">
            <h1> Title </h1>
            <p> Categoria </p>
            <p className="price">$320 </p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};
