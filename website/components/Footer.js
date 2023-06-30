import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Self Knitted Toys for Kids. All rights reserved.</p>
    </footer>
  );
};

export default Footer;