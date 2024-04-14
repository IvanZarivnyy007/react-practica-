// import { useState } from "react";

const Product = ({ product, deleteItem }) => {
  return (
    <div class="product-container">
      <p class="product-title">{product.title}</p>
      <p class="product-price">{product.price}</p>
      <p class="product-author">{product.author}</p>
      <p class="product-desc">{product.desc}</p>
      <p class="product-amount">{product.amount}</p>
      <button class="delete-button" onClick={() => deleteItem(product.id)}>
        Delete
      </button>
    </div>
  );
};

export default Product;
