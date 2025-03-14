import styled from 'styled-components';

export default function CheckoutItem({ item }) {
  return (
    <Item>
      <Quantity>{item.quantity}x</Quantity>
      <Title>{item.title}</Title>
      <Price>${(item.quantity * item.price).toFixed(2)}</Price>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 8px;
`;

const Quantity = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Title = styled.h2`
  flex: 1;

  font-size: 1rem;
  font-weight: 400;
  overflow: hidden;
`;

const Price = styled.div`
  text-align: left;
`;
