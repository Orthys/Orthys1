import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList';
import { getProducts } from '../../utils/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;