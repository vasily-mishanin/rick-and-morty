import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders root element', () => {
    render(<App />);
    const linkElement = screen.getByText(/Project/i);
    expect(linkElement).toBeInTheDocument();
  });
});
