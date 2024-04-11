// import { useState } from "react";

const Product = ({ product, deleteItem, index }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.amount}</p>
      <button onClick={() => deleteItem(product.index)} type="button">
        Dellete
      </button>
    </div>
  );
};

export default Product;
