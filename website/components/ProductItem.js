import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem} id={`product-item-${product.id}`}>
      <Link href={`/products/${product.id}`}>
        <a>
          <img src={`/images/products/${product.image}`} alt={product.name} />
          <h2>{product.name}</h2>
        </a>
      </Link>
      <p>{product.description}</p>
      <div className={styles.productPrice}>
        <span>${product.price}</span>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;