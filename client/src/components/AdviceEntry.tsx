import React from "react";

export interface AdviceEntryProps {
    name?: string,
    advice: string
};

export const AdviceEntry: React.FC<AdviceEntryProps> = ({name, advice}) => {

    return (
        <div className="flex justify-center">
            <p className="text-center text-lg">{advice}</p>
            {name && <span> --- {name}</span>}
        </div>
    )
}