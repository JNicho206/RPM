import { render } from "@testing-library/react";
import { AdviceEntry } from "../../components/AdviceEntry"; // Corrected import path

describe("AdviceEntry", () => {
  it("renders the advice text", () => {
    const advice = "Always stay curious!";
    const { getByText } = render(<AdviceEntry advice={advice} />);
    expect(getByText(advice)).toBeInTheDocument();
  });

  it("renders the name if provided", () => {
    const name = "John Doe";
    const advice = "Always stay curious!";
    const { getByText } = render(<AdviceEntry name={name} advice={advice} />);
    expect(getByText(`--- ${name}`)).toBeInTheDocument();
  });

  it("does not render the name if not provided", () => {
    const advice = "Always stay curious!";
    const { queryByText } = render(<AdviceEntry advice={advice} />);
    expect(queryByText("---")).toBeNull();
  });
});
