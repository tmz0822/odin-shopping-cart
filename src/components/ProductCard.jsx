import { useState } from 'react';
import styled from 'styled-components';

export default function ProductCard({ product, handleAddItemToCart }) {
  const [quantity, setQuantity] = useState(1);

  function addToCart() {
    const item = { ...product, quantity };
    handleAddItemToCart(item);

    setQuantity(0);
  }

  return (
    <Card>
      <Image src={product.image} alt={product.title} />

      <Content>
        <Title>{product.title}</Title>

        <InputWrapper>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            min="0"
          />
          <Button type="button" onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
          <Button type="button" onClick={() => setQuantity(quantity - 1)}>
            -
          </Button>
        </InputWrapper>

        <Button type="button" onClick={addToCart}>
          Add To Cart
        </Button>
      </Content>
    </Card>
  );
}

const Card = styled.div`
  max-width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 8px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 8px;
  color: #333;
`;

const Description = styled.p``;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.1rem;
  margin: 0 0 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
