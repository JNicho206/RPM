import React from "react";
import { GoDotFill } from "react-icons/go";


export type SeparatorType = "icon" | 
                            "line"
                            ;

export interface SeparatorProps {
    type: SeparatorType,
    n: number
}

export const Separator: React.FC<SeparatorProps> = ({type, n}) => {

    return (
        <div className="flex justify-center items-center gap-2 h-[50px]">
            {type === "icon" && Array.from({ length: n }).map((_, i) => (
                <GoDotFill key={i} />
            ))}
            {type === "line" && <div className="w-full h-0.5 bg-gray-400"></div>}
        </div>
    )
}