export default function CartItem({ item }) {
  console.log(item);
  return (
    <div>
      <div>{item.title}</div>
      <div>{item.quantity}</div>
    </div>
  );
}
