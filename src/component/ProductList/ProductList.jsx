// import { useState } from "react";
import Product from "../Product/Product";
import { nanoid } from "nanoid";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={id}>
            <Product product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
