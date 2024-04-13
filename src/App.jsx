import { useState } from "react";

import Form from "./components/Form/Form";
import BookList from "./components/BookList/BookList";
import { useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState(() => {
    const data = localStorage.getItem("books");
    const result = JSON.parse(data);
    return result || [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBooks = (newBooks) => {
    setBooks([...books, newBooks]);
  };

  const delleteBook = (id) => {
    const copy = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(copy);
  };

  return (
    <div>
      <Form addBooks={addBooks} />
      <BookList books={books} delleteBook={delleteBook} />
    </div>
  );
};

export default App;
