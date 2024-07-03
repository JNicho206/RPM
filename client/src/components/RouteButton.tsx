import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

export interface RouteButtonProps {
    title: string,
    route: string,
    Icon: React.FC | IconType,
    external?: boolean
};

export const RouteButton: React.FC<RouteButtonProps> = ({title, route, Icon, external}) => {
    const buttonContent = (
        <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {title}
            <Icon className="ml-4" />
        </button>
    );

    return (
        <>
            {external ? (
                <a href={route} target="_blank" rel="noopener noreferrer" className="block">
                    {buttonContent}
                </a>
            ) : (
                <Link to={route} className="block">
                    {buttonContent}
                </Link>
            )}
        </>
    );
} 