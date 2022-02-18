import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

test('renders Menu button', () => {
  render(<App />);
  const menuElement = screen.getByText(/menu/i);
  expect(menuElement).toBeInTheDocument();
});
