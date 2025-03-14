import { useOutletContext } from 'react-router-dom';
import CartItem from '../components/CartItem';
import styled from 'styled-components';

export default function Cart() {
  const { items } = useOutletContext();

  const handleItemUpdate = () => {};

  return (
    <div
      style={{
        maxWidth: '1200px',
        border: '1px solid red',
        margin: '0 auto',
      }}
    >
      <h1>Cart Overview</h1>
      <FlexWrapper>
        <CartOverview>
          {items.length > 0 &&
            items.map((item) => <CartItem key={item.id} item={item} />)}
        </CartOverview>
        <Checkout>
          <h2>Checkout now</h2>
        </Checkout>
      </FlexWrapper>
    </div>
  );
}

const FlexWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  gap: 20px;
`;
const CartOverview = styled.section`
  flex: 2;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Checkout = styled.section`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
