import { NavLink } from "react-router-dom";
import { pizzaContext } from "../context/PizzaProvider";
import { useContext } from "react";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "undefined");
  const { detail } = useContext(pizzaContext);

  return (
    <div className="nav">
      <NavLink className={setActiveClass} end to="/">
      🍕 Pizzería Mamma Mía!
      </NavLink>

      <NavLink className={setActiveClass} to="/Cart">
      🛒 Carrito de Compra
      </NavLink>
      <h3 className="result">
                   $
                  {detail
                    .map((item) => item.price * item.amount)
                    .reduce((prev, curr) => prev + curr, 0)
                    .toLocaleString('de-DE')}
                </h3>
    </div>
  );
}