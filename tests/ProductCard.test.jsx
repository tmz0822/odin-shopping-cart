import { describe, expect, it } from 'vitest';
import ProductCard from '../src/components/ProductCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ProductCard component', () => {
  it('Renders product', () => {
    const product = {
      id: 1,
      title: 'T-Shirt',
    };

    render(<ProductCard product={product} />);

    expect(screen.getByText('T-Shirt'));
  });

  it('Product quantity can be adjusted', async () => {
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
});
