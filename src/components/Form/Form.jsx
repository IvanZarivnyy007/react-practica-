import { nanoid } from "nanoid";

const Form = ({ addBooks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      title: e.target.elements.title.value,
      price: e.target.elements.price.value,
      amount: e.target.elements.amount.value,
      author: e.target.elements.author.value,
      desc: e.target.elements.desc.value,

      id: nanoid(),
    };
    addBooks(value);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <input type="number" name="price" />
      <input type="number" name="amount" />
      <input type="text" name="author" />
      <input type="text" name="desc" />
      <button type="submit"> Add Book </button>
    </form>
  );
};

export default Form;
