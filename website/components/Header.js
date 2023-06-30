import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/products">
          <a className={styles.navLink}>Products</a>
        </Link>
        <Link href="/cart">
          <a className={styles.navLink}>Cart</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;