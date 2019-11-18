import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const initialState = [
    { id: 1, title: "Game of Thoron" },
    { id: 2, title: "Harry Potter" },
    { id: 3, title: "Gone with the wind" }
  ];
  const [books, setBooks] = useState(initialState);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
