// import { useState } from "react";

const Product = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.amount}</p>
    </div>
  );
};

export default Product;
