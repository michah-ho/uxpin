import { render, screen, fireEvent } from "@testing-library/react";
import PropertiesList from "./PropertiesList";
import data from '../data/properties-data';

describe("<PropertiesList/>", () => {
  const mockSetData = jest.fn();
  it("should render Properties", () => {
    render(
      <PropertiesList
        data={data}
        setData={mockSetData}
      />
    );
    const result = screen.getByText("Color");
    expect(result).toBeInTheDocument();
  });
  it("should open form when plus button is pressed", () => {
    render(
      <PropertiesList
        data={data}
        setData={mockSetData}
      />
    );
    const plusbutton = screen.getAllByTestId("plus-button")[0];
    fireEvent.click(plusbutton);
    const propertyName = screen.getByText("Property Name");
    expect(propertyName).toBeInTheDocument();
  });
});