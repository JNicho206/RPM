import { render, screen } from "@testing-library/react";
import { GPTable } from "../../components/GPTable";

test("renders GPTable component", () => {
  render(<GPTable sortTableBy="week" />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});

test("renders table headers correctly", () => {
  render(<GPTable sortTableBy="week" />);
  const weekHeader = screen.getByText("Week");
  const materialHeader = screen.getByText("Material");
  const purchaseHeader = screen.getByText("Purchase It");
  const makeHeader = screen.getByText("Make It");
  expect(weekHeader).toBeInTheDocument();
  expect(materialHeader).toBeInTheDocument();
  expect(purchaseHeader).toBeInTheDocument();
  expect(makeHeader).toBeInTheDocument();
});

// Add more tests as needed...