import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      const parsedStorage = JSON.parse(cartStorage);
      setCart(parsedStorage);
    }
  }, []);

  const sortStorage = (data) =>
    data.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

  const addToCart = (item) => {
    const isExist = cart.find((cartItem) => cartItem.uuid === item.uuid);
    if (!isExist) {
      const storageData = [...cart, { ...item, addedAt: new Date() }];
      const sortedData = sortStorage(storageData);
      setCart(sortedData);
      return localStorage.setItem("cart", JSON.stringify(storageData));
    }
  };
  const removeFromCart = (uuid) => {
    const filteredData = cart.filter((cartItem) => cartItem.uuid !== uuid);
    const sortedData = sortStorage(filteredData);
    setCart(sortedData);
    return localStorage.setItem("cart", JSON.stringify(filteredData));
  };

  const values = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
