import { getProducts } from '../products';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Shop() {
  const { products } = useLoaderData();
  const { handleAddItemToCart } = useOutletContext();

  return (
    <>
      <h1>Shop</h1>
      {/* TODO: Fetch data from API */}
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddItemToCart={handleAddItemToCart}
          />
        ))}
    </>
  );
}
