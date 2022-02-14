import { render, screen } from '@testing-library/react';
import AddPropertyForm from './AddPropertyForm';

describe('<AddPropertyForm/>', () => {
  const mockSetShowForm = jest.fn();
  const mockSetData = jest.fn();
  it('should render a form if show is true', () => {
    render(<AddPropertyForm show={true} setShowForm={mockSetShowForm} setData={mockSetData}  />);
    const form = screen.getByText("Property Name");
    expect(form).toBeInTheDocument();
  });
  it('should render a no form if show is false', () => {
    render(<AddPropertyForm show={false} setShowForm={mockSetShowForm} setData={mockSetData}  />);
    const form = screen.queryByText("Property Name");
    expect(form).toBeFalsy();
  });
});