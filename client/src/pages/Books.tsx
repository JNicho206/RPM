import React from "react";
import { BookEntry, BookEntryProps } from "../components/BookEntry";


export const Books: React.FC = () =>
{
    const books: BookEntryProps[] = [
        {
            title: "OMW Pilar solves problems",
            description: "This book focuses on Pause"
        },
        {
            title: "OMW Pilar solves problems",
            description: "This book focuses on Pause"
        },
        {
            title: "OMW Pilar solves problems",
            description: "This book focuses on Pause"
        }
    ];

    return (
        <div>
            {books.map((book) => (
                <BookEntry title={book.title} description={book.description}></BookEntry>
            ))}
        </div>
    )
}