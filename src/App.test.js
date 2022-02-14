import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders with the header BUTTON', () => {
  render(<App />);
  const header = screen.getByText("Button");
  expect(header).toBeInTheDocument();
});
