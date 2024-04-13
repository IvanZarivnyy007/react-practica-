const Book = ({ book, delleteBook }) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.price}</p>
      <p>{book.amount}</p>
      <p>{book.author}</p>
      <p>{book.desc}</p>
      <button onClick={delleteBook}>Dellete</button>
    </div>
  );
};

export default Book;
