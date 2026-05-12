import { Book } from 'lucide-react';
import React from 'react'
import BookCard from './BookCard';
interface Props {
    title: string;
    books: Books[];
    containerClassname?: string;
}
const BookList = ({ title, books, containerClassname }: Props) => {
    return (
        <div className={containerClassname}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} />
                ))}
            </ul>
        </div>
    )
}

export default BookList