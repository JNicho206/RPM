import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RouteButton, RouteButtonProps } from "./RouteButton";
import { ImBooks } from "react-icons/im";

interface DropDownItem 
{
    name: string,
    link: string,
};

interface DropDownProps
{
    name: string,
    items: DropDownItem[],
    show: boolean,
    hideF: () => void,
    showF: () => void,
};

export const NavBar: React.FC = () =>
{
    const buttonStyle: string = "h-70 w-fit mx-4"
    const [showAbout, setShowAbout] = useState(false);

    const hideAbout = () => {
        setShowAbout(false);
    }

    const showAboutF = () => {
        setShowAbout(true);
    }
    const [showHowToUse, setShowHowToUse] = useState(false);

    const hideHowToUse = () => {
        setShowHowToUse(false);
    }

    const showHowToUseF = () => {
        setShowHowToUse(true);
    }
    const dropDownInfo: DropDownProps[] = [
        {
            name: "About",
            items: [
                {
                    name: "Research",
                    link: "/about/research"
                },
                {
                    name: "Our Team",
                    link: "/about/our-team"
                }
            ],
            show: showAbout,
            showF: showAboutF,
            hideF: hideAbout,
        },
        {
            name: "How To Use",
            items: [
                {
                    name: "Training Materials",
                    link: "/how-to-use/training-materials"
                },
                {
                    name: "Materials Needed",
                    link: "/how-to-use/materials-needed"
                },
                {
                    name: "Progress Monitoring",
                    link: "/how-to-use/progress-monitoring"
                }
            ],
            show: showHowToUse,
            showF: showHowToUseF,
            hideF: hideHowToUse,
        }
    ]

    return (
        // RPL logo --> Home --> Search Bar --> About (Dropdown) --> How to Use (Dropdown) --> Books --> FAQ
        <div className="sticky top-0 h-20 w-full flex justify-evenly items-center gap-4 bg-purdue-gold">
            <div className="flex gap-4 items-center justify-items-center">
                <RouteButton title={"Home"} route={"/"} Icon={FaHome}></RouteButton>
                <SearchBar></SearchBar>
            </div>
            <div className="flex gap-4">
                {
                    dropDownInfo.map((props, index) => (
                        <DropDown key={index} name={props.name} items={props.items} hideF={props.hideF} showF={props.showF} show={props.show}></DropDown>
                    ))
                }
                <RouteButton title={"Books"} route={"/books"} Icon={ImBooks}></RouteButton>
                <RouteButton title={"FAQ"} route={"/faq"} Icon={FaQuestion}></RouteButton>
            </div>
        </div>
    )
};

export const DropDown: React.FC<DropDownProps> = ({name, items, show, showF, hideF}) =>
{

    return (
        <div onMouseEnter={showF} onMouseLeave={hideF} className="px-2 py-2">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={name}
              menuVariant="dark"
              show={show}
            >
            {items.map((item, index) => (
                <NavDropdown.Item key={index} href={item.link}>{item.name}</NavDropdown.Item>
            ))}
            </NavDropdown>
        </div>
    )
};