import { render, screen } from '@testing-library/react';
import ComponentsPreview from './ComponentsPreview';

test('<ComponentsPreview/>', () => {
  render(<ComponentsPreview />);
  const preview = screen.getByText("Button");
  expect(preview).toBeInTheDocument();
});