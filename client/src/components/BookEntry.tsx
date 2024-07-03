import React from "react";
import { RouteButton } from "./RouteButton";
import { FaShoppingCart } from "react-icons/fa";
import defaultImg from "../assets/data/books/images/bookDefault.jpg";

export interface BookEntryProps {
    title: string,
    description: string,
    img?: string,
    link: string
};

export const BookEntry: React.FC<BookEntryProps> = ({title, description, img, link}) => {
    
    const imgClass = "w-[175px] h-auto";

    return (
        <div className="flex gap-4">
            {img ? 
                <img className={imgClass} src={img}></img> 
                :
                <img className={imgClass} src={defaultImg}></img>
            }
            
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <RouteButton title="Buy This Book" route={link} Icon={FaShoppingCart} external={true}></RouteButton>
            </div>
        </div>
    )
}