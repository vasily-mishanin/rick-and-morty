import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  test('renders About component', () => {
    render(<About />);
    const AboutPage = screen.getByText(/About Us/i);
    expect(AboutPage).toBeInTheDocument();
  });
});
