import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import CartItem from '../src/components/CartItem';
import Cart from '../src/routes/cart';
import { useOutletContext } from 'react-router-dom';
import Root from '../src/routes/root';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useOutletContext: vi.fn(),
}));

describe('Cart page', () => {
  it('renders cart items and checkout items correctly', () => {
    const mockItems = [
      {
        id: 1,
        title: 'Item A',
        quantity: 2,
      },
      {
        id: 2,
        title: 'Item B',
        quantity: 1,
      },
    ];

    useOutletContext.mockReturnValue({
      items: mockItems,
    });

    render(<Cart />);

    // Cart items and checkout items both shows the item title
    expect(screen.getAllByText('Item A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Item B').length).toBeGreaterThan(0);
    const quantityInputs = screen.getAllByRole('spinbutton');
    expect(quantityInputs[0].value).toEqual('2');
    expect(quantityInputs[1].value).toEqual('1');
  });
});
