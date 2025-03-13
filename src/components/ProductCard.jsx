import { useState } from 'react';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <div>{product.title}</div>

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <button type="button" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
      <button type="button" onClick={() => setQuantity(quantity - 1)}>
        -
      </button>

      <button type="button">Add To Cart</button>
    </div>
  );
}
