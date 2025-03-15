import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import styled from 'styled-components';

export default function Root() {
  const [items, setItems] = useState([]);

  function handleAddItemToCart(item) {
    const found = items.find((i) => i.id === item.id);
    if (!found) {
      setItems([...items, item]);
    } else {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        } else {
          return i;
        }
      });
      setItems(newItems);
    }
  }

  function handleUpdateCartItem(id, newQuantity) {
    const quantity = Number(newQuantity);
    if (Number(quantity) === 0) {
      // Remove item from cart
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    } else {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        } else {
          return item;
        }
      });
      setItems(updatedItems);
    }
  }

  function handlePlaceOrder() {
    // place order logics..

    // Clear items
    setItems([]);
  }

  return (
    <Wrapper>
      <Navbar quantity={items.length} />

      <Outlet
        context={{
          items,
          handleAddItemToCart,
          handleUpdateCartItem,
          handlePlaceOrder,
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
