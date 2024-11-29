import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//* the first thing is to create the context 
export const BooksContext = createContext();

const BooksContextProvider = ({children}) => {

    const [ books, setBooks ] = useState([]);
    const [ error, setError ] = useState(null);

    const fetchBooks = async() => {
        try {
            const response = await axios.get('http://localhost:5000/books');
            // console.log(response);

            setBooks(response.data);
        } catch (error) {
            // console.log(error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

  return (
    <BooksContext.Provider 
        value={{ 
            books,
            error,
        }}
    >
        {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;