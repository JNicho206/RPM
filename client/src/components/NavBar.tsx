import React from "react";
import { SearchBar } from "./SearchBar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface DropDownItem 
{
    name: string,
    link: string,
};

interface DropDownProps
{
    name: string,
    items: DropDownItem[]
};

export const NavBar: React.FC = () =>
{
    const buttonStyle: string = "h-70 w-fit mx-4"
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
            ]
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
            ]
        }
    ]

    return (
        // RPL logo --> Home --> Search Bar --> About (Dropdown) --> How to Use (Dropdown) --> Books --> FAQ
        <div className="h-10 w-full bg-blue-300">
            <div>
                <a className="" href="/">Home</a>
                <SearchBar></SearchBar>
            </div>
            <div>
                {
                    dropDownInfo.map((props) => (
                        <DropDown name={props.name} items={props.items}></DropDown>
                    ))
                }
                <a className={buttonStyle} href="/books">Books</a>
                <a className={buttonStyle} href="/faq">FAQ</a>
            </div>
        </div>
    )
};

export const DropDown: React.FC<DropDownProps> = ({name, items}) =>
{

    return (
        <div>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={name}
              menuVariant="dark"
            >
            {items.map((item) => (
                <NavDropdown.Item href={item.link}>{item.name}</NavDropdown.Item>
            ))}
            </NavDropdown>
        </div>
    )
};