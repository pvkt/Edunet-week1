import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook to use Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add Product to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Product from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear Cart after purchase
  const clearCart = () => {
    setCart([]);
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
