import { render, screen } from '@testing-library/react';
import App from 'App';

describe('Main navigation', () => {
  test('renders two links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });
});
