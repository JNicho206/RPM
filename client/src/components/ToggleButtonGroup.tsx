import React from "react";

export interface ToggleButton {
    text: string,
    toggled: boolean,
    onClick: () => void;
}

export interface ToggleButtonGroupProps {
    buttons: ToggleButton[],
    multiSelect: boolean,
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({buttons, multiSelect}) => {

    return (
        <div className="inline-flex">
            {buttons.map((button) => (
                <button onClick={button.onClick} className={`px-4 py-2 rounded-md ${button.toggled ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                    {button.text}
                </button>
            ))}
            
        </div>
    );
};