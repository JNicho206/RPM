import { render } from "@testing-library/react";
import { Separator, SeparatorProps } from "../../components/Separator";

describe("Separator", () => {
  const defaultProps: SeparatorProps = {
    type: "icon",
    n: 3,
  };

  it("renders the correct number of icons", () => {
    const { container } = render(<Separator {...defaultProps} />);
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(defaultProps.n);
  });

  it("renders a line when type is 'line'", () => {
    const { container } = render(<Separator type="line" n={0} />);
    const line = container.querySelector(".bg-gray-400");
    expect(line).toBeInTheDocument();
  });
});