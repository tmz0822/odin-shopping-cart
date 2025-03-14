import { Link, useOutletContext } from 'react-router-dom';
import CartItem from '../components/CartItem';
import styled from 'styled-components';
import CheckoutItem from '../components/CheckoutItem';

export default function Cart() {
  const { items } = useOutletContext();

  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);

  const handleItemUpdate = () => {};

  return (
    <>
      <Title>Cart Overview</Title>
      <Wrapper>
        <CartOverview>
          {items.length === 0 && (
            <EmptyCart>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L6 6M6 6H21L19 13H8M6 6L8 13M8 13L6 18H19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="20.5" r="1.5" fill="black" />
                <circle cx="17.5" cy="20.5" r="1.5" fill="black" />
              </svg>

              <div>Your cart is empty</div>
              <Link to="/shop">Go shop now!</Link>
            </EmptyCart>
          )}
          {items.length > 0 &&
            items.map((item) => <CartItem key={item.id} item={item} />)}
        </CartOverview>
        <Checkout>
          <CheckoutTitle>Checkout now</CheckoutTitle>
          {items.length > 0 &&
            items.map((item) => <CheckoutItem key={item.id} item={item} />)}
          <CheckoutPrice>
            <TotalPrice>Total Price:</TotalPrice>
            <div>${totalPrice}</div>
          </CheckoutPrice>
          <CheckoutButton>Place order</CheckoutButton>
        </Checkout>
      </Wrapper>
    </>
  );
}

const Title = styled.h1`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  flex-grow: 1; // make height fit to screen

  display: flex;
  gap: 20px;
`;

const CartOverview = styled.section`
  flex: 2;

  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  gap: 0.8rem;
  height: 100%;
`;

const Checkout = styled.section`
  flex: 1;

  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  max-height: 800px;
  height: max-content;
  padding: 1rem;

  position: sticky;
  top: 50px;
  overflow-y: auto;
`;

const CheckoutTitle = styled.h2`
  text-align: center;
  margin: 0 0 8px;
`;

const CheckoutPrice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.3rem;
  margin-bottom: 8px;
`;

const TotalPrice = styled.div`
  flex: 1;
  text-align: right;
  font-weight: 700;
`;

const CheckoutButton = styled.button``;
