import { useState } from "react";
import Form from "./component/Form/Form";
import ProducList from "./component/ProductList/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (item) => {
    setProducts([...products, item]);
    console.log(item);
  };

  const deleteItem = (index) => {
    setProducts((preProducts) => {
      return preProducts.filter((products, i) => i !== index);
    });
  };

  return (
    <div>
      <Form addProduct={addProduct} />
      <ProducList products={products} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
