import { describe, expect, it, vi } from 'vitest';
import ProductCard from '../src/components/ProductCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ProductCard component', () => {
  it('renders product correctly', () => {
    const product = {
      id: 1,
      title: 'T-Shirt',
    };

    render(<ProductCard product={product} />);

    expect(screen.getByText('T-Shirt'));
  });

  it('can adjust product quantity', async () => {
    const product = {
      id: 1,
      title: 'T-Shirt',
    };

    const user = userEvent.setup();
    render(<ProductCard product={product} />);

    const incrementButton = screen.getByRole('button', { name: '+' });
    const decrementButton = screen.getByRole('button', { name: '-' });
    const quantityInput = screen.getByRole('spinbutton');

    expect(quantityInput.value).toEqual('1');
    await user.click(incrementButton);
    expect(quantityInput.value).toEqual('2');
    await user.click(decrementButton);
    expect(quantityInput.value).toEqual('1');
  });

  // TODO: product can be added into cart.
  it('calls handleAddItemToCart when Add To Cart button is clicked', async () => {
    const mockHandleAddItemToCart = vi.fn();
    const product = {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      image: 'https://example.com/product.jpg',
    };

    const user = userEvent.setup();
    render(
      <ProductCard
        product={product}
        handleAddItemToCart={mockHandleAddItemToCart}
      />
    );

    const addToCartButton = screen.getByRole('button', {
      name: /add to cart/i,
    });
    await user.click(addToCartButton);

    expect(mockHandleAddItemToCart).toHaveBeenCalledTimes(1);
    expect(mockHandleAddItemToCart).toHaveBeenCalledWith({
      ...product,
      quantity: 1,
    });
  });
});
