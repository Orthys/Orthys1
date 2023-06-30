import React from 'react';
import styles from '../styles/CartItem.module.css';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.product.image} alt={item.product.name} />
      <div className={styles.productDetails}>
        <h4>{item.product.name}</h4>
        <p>{item.product.description}</p>
        <p>{item.product.price} USD</p>
      </div>
      <div className={styles.productActions}>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;