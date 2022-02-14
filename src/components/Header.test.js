import { render, screen } from '@testing-library/react';
import Header from './Header';

test('<Header/>', () => {
  render(<Header />);
  const header = screen.getByText("Material UI");
  expect(header).toBeInTheDocument();
});