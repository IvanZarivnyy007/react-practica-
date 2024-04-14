// import { useState } from "react";
import Product from "../Product/Product";

const ProductList = ({ products, deleteItem }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product product={product} deleteItem={deleteItem} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
