import React from "react";
import { render } from "@testing-library/react";
import { FAQ } from "../pages/FAQ";

describe("FAQ", () => {
    it("renders FAQ entries", () => {
        const { getByText } = render(<FAQ />);
        
        // Assert that the FAQ entries are rendered
        expect(getByText("How do I use this website?")).toBeInTheDocument();
        expect(getByText("Check out our how to use page. This page covers materials you may need, and best practices.")).toBeInTheDocument();
    });

    it("renders advice entries", () => {
        const { getByText } = render(<FAQ />);
        
        // Assert that the advice entries are rendered
        expect(getByText("Advice from Teacher 1")).toBeInTheDocument();
        expect(getByText("Advice from Teacher 2")).toBeInTheDocument();
        expect(getByText("Advice from Teacher 3")).toBeInTheDocument();
    });
});