import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { addToCart } from '../../utils/cart';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <Header />
      <div>
        <img src={`/images/products/${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <Cart />
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await axios.get('http://localhost:3000/api/products');
  const products = res.data;

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  const product = res.data;

  return { props: { product } };
}

export default ProductPage;