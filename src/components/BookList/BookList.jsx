import Book from "../Book/Book";

const BookList = ({ books, delleteBook }) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <Book book={book} delleteBook={() => delleteBook(book.id)} />
          </li>
        );
      })}
    </div>
  );
};

export default BookList;
