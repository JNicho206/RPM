import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { OpenPDFButton } from "../../components/OpenPDFButton";

describe("OpenPDFButton", () => {
  it("should open the PDF in a new tab when clicked", () => {
    const path = "https://example.com/sample.pdf";
    const { getByText } = render(<OpenPDFButton path={path} />);
    const button = getByText("Open Session PDF");

    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(path, "_blank");
  });
});