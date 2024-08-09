import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ToggleButtonGroup, ToggleButton } from "../../components/ToggleButtonGroup";

describe("ToggleButtonGroup", () => {
    const buttons: ToggleButton[] = [
        {
            id: 1,
            text: "Button 1",
            toggled: false,
            onClick: jest.fn(),
        },
        {
            id: 2,
            text: "Button 2",
            toggled: true,
            onClick: jest.fn(),
        },
    ];

    it("renders the buttons correctly", () => {
        const { getByText } = render(<ToggleButtonGroup buttons={buttons} multiSelect={false} />);
        
        buttons.forEach((button) => {
            const buttonElement = getByText(button.text);
            expect(buttonElement).toBeInTheDocument();
        });
    });

    it("calls the onClick function when a button is clicked", () => {
        const { getByText } = render(<ToggleButtonGroup buttons={buttons} multiSelect={false} />);
        
        buttons.forEach((button) => {
            const buttonElement = getByText(button.text);
            fireEvent.click(buttonElement);
            expect(button.onClick).toHaveBeenCalledWith(button.id);
        });
    });

    // Add more test cases as needed
});