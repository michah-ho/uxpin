import { render, screen, fireEvent } from '@testing-library/react';
import FormToggle from './FormToggle';

describe('<FormToggle/>', () => {
  const mockChangeHandler = jest.fn();
  it("should render the form toggle", () => {
    render(<FormToggle isChecked={false} changeHandler={mockChangeHandler} idx={0} />);
    const result = screen.getByText("True");
    expect(result).toBeInTheDocument();
  })

  it("should call passed in func when clicked", () => {
    render(<FormToggle isChecked={false} changeHandler={mockChangeHandler} idx={0} />);
    fireEvent.click(screen.getByText("True"));
    expect(mockChangeHandler).toBeCalled();
  });
  
});