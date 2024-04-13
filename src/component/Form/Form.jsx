// import {useState} from "react"

const Form = ({ addProduct }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const x = {
      title: event.target.elements.title.value,
      price: event.target.elements.price.value,
      amount: event.target.elements.amount.value,
      desc: event.target.elements.desc.value,
      author: event.target.elements.author.value,
    };
    addProduct(x);
    id = nanoid();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Назва товару" />
      <input type="number" name="price" placeholder="Ціна" />
      <input type="number" name="amount" placeholder="Кількість" />
      <input type="text" name="desc" placeholder="Опис" />
      <input type="text" name="author" placeholder="Виробник" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default Form;
