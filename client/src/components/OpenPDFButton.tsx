import React from "react";
import { FaFilePdf } from "react-icons/fa";

export interface OpenPDFButtonProps {
    path: string
}

export const OpenPDFButton: React.FC<OpenPDFButtonProps> = ({path}) => {

    const handleClick = () => {
        window.open(path, '_blank');
    }

    return (
        <button
            onClick={handleClick}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Open Session PDF
            <FaFilePdf className="ml-4" />
        </button>
    );
}