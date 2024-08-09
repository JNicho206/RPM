import { render, screen, fireEvent } from "@testing-library/react";
import { FileButton } from "../../components/FileButton";

test("renders FileButton component with text", () => {
  const buttonText = "Download File";
  render(<FileButton path="/path/to/file.pdf" text={buttonText} type="download" />);

  const buttonElement = screen.getByText(buttonText);

  expect(buttonElement).toBeInTheDocument();
});

test("renders FileButton component with custom icon", () => {
  const buttonText = "Open File";
  const CustomIcon = () => <span data-testid="custom-icon">Custom Icon</span>;
  render(<FileButton path="/path/to/file.jpg" text={buttonText} Icon={CustomIcon} type="open" />);

  const buttonElement = screen.getByText(buttonText);
  const iconElement = screen.getByTestId("custom-icon");

  expect(buttonElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
});

test("opens file in new tab when clicked with type 'open'", () => {
  const path = "/path/to/file.pdf";
  const buttonText = "Open File";
  render(<FileButton path={path} text={buttonText} type="open" />);

  const buttonElement = screen.getByText(buttonText);
  fireEvent.click(buttonElement);

  expect(window.open).toHaveBeenCalledWith(path, "_blank");
});

// Add more test cases as needed