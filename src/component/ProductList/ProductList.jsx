// import { useState } from "react";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <Product product={product} index={index} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
