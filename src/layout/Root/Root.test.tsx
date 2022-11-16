import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Root element', () => {
  test('renders main navigation', () => {
    render(<App />);
    const linkFromMainNav = screen.getByText('About Us');
    expect(linkFromMainNav).toBeInTheDocument();
  });
});
