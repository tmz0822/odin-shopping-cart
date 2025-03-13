import { useState } from 'react';

export default function ProductCard({ product, handleAddItemToCart }) {
  const [quantity, setQuantity] = useState(0);

  function addToCart() {
    const item = { ...product, quantity };
    handleAddItemToCart(item);
  }

  return (
    <div>
      <div>{product.title}</div>

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        min="0"
      />
      <button type="button" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
      <button type="button" onClick={() => setQuantity(quantity - 1)}>
        -
      </button>

      <button type="button" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}
