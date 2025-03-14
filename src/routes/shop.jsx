import { getProducts } from '../products';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Shop() {
  const { products } = useLoaderData();
  const { handleAddItemToCart } = useOutletContext();

  return (
    <Wrapper>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddItemToCart={handleAddItemToCart}
          />
        ))}
    </Wrapper>
  );
}
