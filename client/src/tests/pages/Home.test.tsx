import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../pages/Home";

describe("Home", () => {
    it("renders without error", () => {
        render(<Home />);
    });

    // Add more tests here...
});