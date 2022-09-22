import React from 'react';
import { render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';

test('renders learn react link', () => {
  render(<Keyboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Keys Render

// Keyboard responds to typed letters