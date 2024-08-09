import React from "react";
import { render, screen } from "@testing-library/react";
import { RouteButton } from "../../components/RouteButton";

describe("RouteButton", () => {
  it("renders button with title and icon", () => {
    render(
      <RouteButton
        title="Test Button"
        route="/test"
        Icon={() => <div data-testid="test-icon" />}
      />
    );

    const button = screen.getByRole("button", { name: "Test Button" });
    const icon = screen.getByTestId("test-icon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("renders external link when 'external' prop is true", () => {
    render(
      <RouteButton
        title="External Link"
        route="https://example.com"
        Icon={() => <div data-testid="test-icon" />}
        external
      />
    );

    const link = screen.getByRole("link", { name: "External Link" });
    const icon = screen.getByTestId("test-icon");

    expect(link).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders internal link when 'external' prop is false", () => {
    render(
      <RouteButton
        title="Internal Link"
        route="/internal"
        Icon={() => <div data-testid="test-icon" />}
        external={false}
      />
    );

    const link = screen.getByRole("link", { name: "Internal Link" });
    const icon = screen.getByTestId("test-icon");

    expect(link).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/internal");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });
});