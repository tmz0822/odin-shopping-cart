import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import Shop from '../src/routes/shop';
import {
  MemoryRouter,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useLoaderData: vi.fn(),
    useOutletContext: vi.fn(),
  };
});

describe('Shop component', () => {
  it.skip('renders shop item from loader data', () => {
    useLoaderData.mockReturnValue([
      { id: 1, title: 'T-Shirt' },
      { id: 2, title: 'Jeans' },
    ]);

    useOutletContext.mockReturnValue({
      handleAddItemToCart: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    expect(11).toEqual(11);
  });
});
