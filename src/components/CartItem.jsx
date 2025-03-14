import { useState } from 'react';
import styled from 'styled-components';

export default function CartItem({ item, handleUpdateCartItem }) {
  const [quantity, setQuantity] = useState(item.quantity);

  function updateCartItem(newQuantity) {
    console.log('updating cart item');
    setQuantity(newQuantity);
    handleUpdateCartItem(item.id, newQuantity);
  }

  return (
    <Item>
      <ImageContainer>
        <Image src={item.image} alt={item.title} />
      </ImageContainer>
      <Details>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>

        <BottomDetails>
          <Price>${item.price}</Price>
          <div style={{ display: 'flex', border: '1px solid #e0e0e0' }}>
            <Button type="button" onClick={() => updateCartItem(quantity - 1)}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="15"
                  y1="25"
                  x2="35"
                  y2="25"
                  stroke="lightgrey"
                  strokeWidth="3"
                />
              </svg>
            </Button>
            <Input
              type="number"
              value={quantity}
              min={0}
              max={99}
              onChange={(e) => updateCartItem(e.target.value)}
            />
            <Button type="button" onClick={() => updateCartItem(quantity + 1)}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="15"
                  y1="25"
                  x2="35"
                  y2="25"
                  stroke="lightgrey"
                  strokeWidth="3"
                />
                <line
                  x1="25"
                  y1="15"
                  x2="25"
                  y2="35"
                  stroke="lightgrey"
                  strokeWidth="3"
                />
              </svg>
            </Button>
          </div>
        </BottomDetails>
      </Details>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px;
`;
const ImageContainer = styled.div`
  max-width: 120px;

  flex: 1;
`;
const Image = styled.img`
  min-width: 50px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-evenly;
  flex: 1;
`;
const Title = styled.h2`
  font-size: 1.25rem;
`;
const Description = styled.div`
  font-size: 1.15rem;
`;

const BottomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  font-size: 1.1rem;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.2rem;

  > svg {
    max-width: 100%;
    height: 100%;
  }
`;
const Input = styled.input`
  width: 50px;
  text-align: center;
  border: none;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  outline: none;

  &:focus {
  }
`;
