import React, { createContext, useEffect, useState } from "react";

export const pizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [detail, setDetail] = useState([]);


  useEffect(() => {
    const dataPizza = async () => {
        const response = await fetch('/pizzas.json');
        const data = await response.json();
        setPizza(data);
    };

    dataPizza();
}, []);

  return (
    <pizzaContext.Provider
      value={{
      pizza,
        setPizza,
        detail,
        setDetail,
      }}
    >
      {children}
    </pizzaContext.Provider>
  );
};

export default PizzaProvider;