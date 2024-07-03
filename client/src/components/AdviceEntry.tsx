import React from "react";

export interface AdviceEntryProps {
    name: string,
    advice: string
};

export const AdviceEntry: React.FC<AdviceEntryProps> = ({name, advice}) => {

    return (
        <div>
            <p>{advice}</p>
            <span> --- {name}</span>
        </div>
    )
}