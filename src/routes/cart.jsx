import { useOutletContext } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { items } = useOutletContext();
  console.log(items);
  console.log(items.length);
  return (
    <>
      <h1>Cart</h1>
      {items.length > 0 &&
        items.map((item) => <CartItem key={item.id} item={item} />)}
    </>
  );
}
