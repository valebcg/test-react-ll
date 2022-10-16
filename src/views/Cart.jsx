import React, { useContext } from "react";
import { pizzaContext } from "../context/PizzaProvider";

const Cart = () => {
  const { detail, setDetail } = useContext(pizzaContext);

  const amountSet = (ac, id, am) => {
    setDetail((current) =>
      current.map((obj) => {
        if (obj.idProduct === id) {
          if (ac === "add") {
            return { ...obj, amount: am * 1 + 1 };
          } else if (ac === "rest" && am > 1) {
            return { ...obj, amount: am * 1 - 1 };
          }
        }
        return obj;
      })
    );
  };

  return (
    
    <div className="container-details">
      <div className="container-trolley">
        <h2 className="text-details">Detalles del Pedido</h2>
      </div>

      <div className="detail-imag">
        {detail.map((p) => (
          <div className="info-images">
            <img className="pizza-img" src={p.img} alt="" />
            <div className="container-name">
              <h3> {p.name}</h3>
            </div>
            <div className="price-result">
              <h3>${p.price * p.amount}</h3>
            </div>
            <div className="container-btn">
              <button
                className="btnrest"
                onClick={() => amountSet("rest", p.idProduct, p.amount)}
              >
                -
              </button>
              <p> {p.amount}</p>
              <button
                className="btnmore"
                onClick={() => amountSet("add", p.idProduct, p.amount)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div>
          <h3 className="resultcart">
            Total Pedido $
            {detail
              .map((item) => item.price * item.amount)
              .reduce((prev, curr) => prev + curr, 0)
              .toLocaleString("de-DE")}
          </h3>
          <button className="btnfinal">Ir a Pagar</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
