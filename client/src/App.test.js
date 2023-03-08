import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application title', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders 2 buttons', () => {
  render(<App />);
  const button1 = screen.getByRole('button', {name : /get/i});
  expect(button1).toBeInTheDocument();
  const button2 = screen.getByRole('button', {name: /post/i});
  expect(button2).toBeInTheDocument();
});

