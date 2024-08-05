import React from "react";
import { IconType } from "react-icons";
import { FaFilePdf, FaRegFileImage } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export type FileButtonType = "open" | "download";

export interface FileButtonProps {
    path: string,
    text: string,
    Icon?: React.FC | IconType,
    type: FileButtonType
}

export const FileButton: React.FC<FileButtonProps> = ({path, text, Icon, type}) => {

    const ext = path.split('.').pop();
    const imgExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];

    if (!Icon && type == "download") {
        Icon = IoMdDownload;
    }

    const handleClick = () => {
        if (type === "open") {
            window.open(path, '_blank');
        }
    }

    return (
        <button
            onClick={handleClick}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {text}
            {Icon && <Icon className="ml-4" />}
            {!Icon && ext === "pdf" && <FaFilePdf className="ml-4" />}
            {!Icon && ext && imgExtensions.includes(ext) && <FaRegFileImage className="ml-4"/>}
        </button>
    );
}