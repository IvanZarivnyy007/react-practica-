import { useEffect, useState } from "react";
import Form from "./component/Form/Form";
import ProducList from "./component/ProductList/ProductList";

const App = () => {
  const [products, setProducts] = useState(() => {
    const local = localStorage.getItem("products", JSON.stringify(products));
    const data = local.JSON.parse(products);
    setProducts(data);
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  const addProduct = (item) => {
    setProducts([...products, item]);
    console.log(item);
  };

  const deleteItem = (id) => {
    const item = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(item);
  };

  return (
    <div>
      <Form addProduct={addProduct} />
      <ProducList products={products} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
