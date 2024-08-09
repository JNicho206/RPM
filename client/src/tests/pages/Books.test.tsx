import React from "react";
import { render } from "@testing-library/react";
import { Books } from "../pages/Books";

describe("Books", () => {
    it("renders the Books component", () => {
        render(<Books />);
        // Add your assertions here
    });
});