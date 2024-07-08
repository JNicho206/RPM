import React from "react";
import logo from "../assets/tmp.jpg";
import P from "../assets/purdue-P.svg";
import { RouteButton } from "./RouteButton";
import { FaQuestion } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";

export const Footer: React.FC = () =>
{

    return (
        <div className="flex justify-evenly bg-purdue-gold w-full h-[180px] relative top-0">
            <div className="flex items-center">
                <img src={P}></img>
            </div>
            <div className="flex justify-center items-center m-10 w-fit">
                <h1 className="font-bold text-7xl">RPM</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <button type="button" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                Contact Us
                </button>
                <span className="font-bold">@</span>
                <span className="font-bold">cel@purdue.edu</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1>Questions?</h1>
                <RouteButton title={"FAQ"} route={"/faq"} Icon={FaQuestion}></RouteButton>
                <RouteButton title={"About"} route={"/about"} Icon={SlPeople}></RouteButton>
            </div>

        </div>
    )
}