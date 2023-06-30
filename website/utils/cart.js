import { useState } from 'react';

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { id: Date.now(), product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function updateCart(id, quantity) {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  }

  return { cartItems, addToCart, removeFromCart, updateCart };
}