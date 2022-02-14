import { render, screen } from "@testing-library/react";
import Properties from "./Properties";

describe("<Properties/>", () => {
  const mockSetIsDiscard = jest.fn();
  const mockSetIsSaved = jest.fn();
  it("should render Properties", () => {
    render(
      <Properties
        isDiscard={false}
        setIsDiscard={mockSetIsDiscard}
        isSaved={false}
        setIsSaved={mockSetIsSaved}
      />
    );
    const result = screen.getByText("Properties");
    expect(result).toBeInTheDocument();
  });
});
