import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import { getProducts } from '../utils/api';

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>My Knitted Toys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to My Knitted Toys Store</h1>
        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default Home;