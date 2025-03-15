import { describe, expect, it, vi } from 'vitest';
import CartItem from '../src/components/CartItem';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CartItem component', () => {
  it('displays cart item correctly', () => {
    const item = {
      title: 'Test Product',
      description: 'Test description',
      price: '100.00',
    };

    render(<CartItem item={item} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
  });

  it('updates the quantity of the cart item', async () => {
    const item = {
      title: 'Test Product',
      description: 'Test description',
      price: '100.00',
      quantity: 5,
    };

    const mockHandleUpdateCartItem = vi.fn();
    const user = userEvent.setup();
    render(
      <CartItem item={item} handleUpdateCartItem={mockHandleUpdateCartItem} />
    );
    const buttons = screen.getAllByRole('button');
    const decrementButton = buttons[0];
    const incrementButton = buttons[1];

    const quantityInput = screen.getByRole('spinbutton');

    expect(quantityInput.value).toBe('5');
    await user.click(decrementButton);
    expect(quantityInput.value).toBe('4');
    await user.click(incrementButton);
    expect(quantityInput.value).toBe('5');
  });
});
