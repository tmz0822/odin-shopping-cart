import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Root from '../src/routes/root';

describe('Root page', () => {
  it.skip('adds item into cart correctly', async () => {
    render(<Root />);
    render(<Shop />);
  });
});
