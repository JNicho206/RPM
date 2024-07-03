import React from "react";
import { BookEntry, BookEntryProps } from "../components/BookEntry";
import bookData from "../assets/data/books/books.json";

const images = import.meta.glob('../assets/data/books/images/*.{jpg,png,jpeg,gif}');
const imgPaths = Object.keys(images).map((img: string) => {return img.replace("../assets", "src/assets")})


export const Books: React.FC = () =>
{



    return (
        <div className="flex flex-col gap-4 items-center mx-96 my-20">
            <h1 className="section-header">Books</h1>
            <div className="flex flex-col gap-16 items-center">
                {bookData.map((book, index) => (
                    <BookEntry key={index} title={book.title} description={book.description} img={imgPaths.find((b: string) => {return b.endsWith(book.img)})} link={book.link}></BookEntry>
                ))}
            </div>
        </div>
    )
}