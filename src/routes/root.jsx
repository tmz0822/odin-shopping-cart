import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';

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

  return (
    <>
      <Navbar />
      <Outlet context={{ items, handleAddItemToCart }} />
    </>
  );
}
