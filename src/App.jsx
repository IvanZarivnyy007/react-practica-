// import {useEffect, useState} from "react"
// import Button from "./component/Button/Button";
import { useState } from "react";
import Form from "./component/Form/Form";
import ProducList from "./component/ProductList/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (item) => {
    setProducts([...products, item]);
  };

  return (
    <div>
      <Form addProduct={addProduct} />
      <ProducList products={products} />
    </div>
  );
};

export default App;
