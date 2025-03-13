import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'https://fakestoreapi.com/products';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('404 Not Found');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Shop</h1>
      {/* TODO: Fetch data from API */}
      {products.length > 0 &&
        products.map((product) => <ProductCard product={product} />)}
    </>
  );
}
