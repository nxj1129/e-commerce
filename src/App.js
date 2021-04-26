import React, { useState, useEffect } from "react";
// import Products from "./components/products/Products";
// import Navbar from "./components/navbar/Navbar";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
