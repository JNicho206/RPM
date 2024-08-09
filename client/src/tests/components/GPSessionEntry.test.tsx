import React from "react";
import { render, screen } from "@testing-library/react";
import { GPSessionEntry } from "../../components/GPSessionEntry";

describe("GPSessionEntry", () => {
  const mockProps = {
    name: "Session 1",
    pdf: "session1.pdf",
    objective: "Objective 1",
  };

  it("renders the session name", () => {
    render(<GPSessionEntry {...mockProps} />);
    const sessionName = screen.getByText(mockProps.name);
    expect(sessionName).toBeInTheDocument();
  });

  it("renders the session objective", () => {
    render(<GPSessionEntry {...mockProps} />);
    const sessionObjective = screen.getByText(mockProps.objective);
    expect(sessionObjective).toBeInTheDocument();
  });

  it("renders the OpenPDFButton component with the correct path", () => {
    render(<GPSessionEntry {...mockProps} />);
    const openPDFButton = screen.getByRole("button", { name: "Open PDF" });
    expect(openPDFButton).toBeInTheDocument();
    expect(openPDFButton).toHaveAttribute("path", "/assets/data/session1.pdf");
  });
});