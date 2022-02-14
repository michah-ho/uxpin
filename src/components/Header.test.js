import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header/>', () => {
  it("should render header", () => {
    render(<Header />);
    const header = screen.getByText("Material UI");
    expect(header).toBeInTheDocument();
  })
});