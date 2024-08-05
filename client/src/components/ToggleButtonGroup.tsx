import React, { useState } from "react";

export interface ToggleButton {
    id: number;
    text: string;
    toggled: boolean;
    onClick: (id: number) => void;
}

export interface ToggleButtonGroupProps {
    buttons: ToggleButton[];
    multiSelect: boolean;
}

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ buttons, multiSelect }) => {
    const [toggledButtons, setToggledButtons] = useState<ToggleButton[]>(buttons);

    const handleButtonClick = (id: number) => {
        buttons[id].onClick(id);
        setToggledButtons(prevState => {
            return prevState.map(button => {
                if (button.id === id) {
                    if (multiSelect) {
                        return { ...button, toggled: !button.toggled };
                    } else {
                        return { ...button, toggled: true };
                    }
                } else {
                    return multiSelect ? button : { ...button, toggled: false };
                }
            });
        });
    };

    return (
        <div className="inline-flex">
            {toggledButtons.map((button, i) => (
                <button
                    key={i}
                    onClick={() => handleButtonClick(button.id)}
                    className={`px-4 py-2 rounded-md ${button.toggled ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                    {button.text}
                </button>
            ))}
        </div>
    );
};
