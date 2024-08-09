import { render } from "@testing-library/react";
import { BookEntry, BookEntryProps } from "../../components/BookEntry";

describe("BookEntry", () => {
  const defaultProps: BookEntryProps = {
    title: "Sample Title",
    description: "Sample Description",
    img: "sample-image.jpg",
    link: "https://example.com"
  };

  it("renders the book title and description", () => {
    const { getByText } = render(<BookEntry {...defaultProps} />);
    expect(getByText("Sample Title")).toBeInTheDocument();
    expect(getByText("Sample Description")).toBeInTheDocument();
  });

  it("renders the book image if provided", () => {
    const { getByAltText } = render(<BookEntry {...defaultProps} />);
    expect(getByAltText("Book Image")).toBeInTheDocument();
  });

  it("renders the default book image if no image is provided", () => {
    const { getByAltText } = render(<BookEntry {...defaultProps} img={undefined} />);
    expect(getByAltText("Default Book Image")).toBeInTheDocument();
  });

  it("renders the route button with the correct title, route, and icon", () => {
    const { getByText, getByTestId } = render(<BookEntry {...defaultProps} />);
    expect(getByText("Buy This Book")).toBeInTheDocument();
    expect(getByTestId("route-button")).toHaveAttribute("href", "https://example.com");
    expect(getByTestId("route-button")).toContainHTML('<svg class="svg-icon">');
  });
});