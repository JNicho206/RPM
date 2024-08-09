import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from "../../components/NavBar";

describe("NavBar", () => {
  it("renders home button", () => {
    render(<NavBar />);
    const homeButton = screen.getByText("Home");
    expect(homeButton).toBeInTheDocument();
  });

  it("renders search bar", () => {
    render(<NavBar />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });

  it("renders dropdown menus", () => {
    render(<NavBar />);
    const aboutDropdown = screen.getByText("About");
    const howToUseDropdown = screen.getByText("How To Use");
    expect(aboutDropdown).toBeInTheDocument();
    expect(howToUseDropdown).toBeInTheDocument();
  });

  it("renders books button", () => {
    render(<NavBar />);
    const booksButton = screen.getByText("Books");
    expect(booksButton).toBeInTheDocument();
  });

  it("renders FAQ button", () => {
    render(<NavBar />);
    const faqButton = screen.getByText("FAQ");
    expect(faqButton).toBeInTheDocument();
  });
});