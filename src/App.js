import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import axios from "axios";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

const App = () => {
  const API = "http://localhost:8000/products";
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);
  // ! CREATE (post request)

  function add(newProduct) {
    axios.post(API, newProduct);
  }

  // ! ReAD (get request)

  const getProducts = async () => {
    const result = await axios.get(API);
    setProducts(result.data);
  };

  // ! DELETE
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  // ! get one Product details
  async function getOneProduct(id) {
    const result = await axios(`${API}/${id}`);
    setOneProduct(result.data);
  }

  // ! UPDAT (patch request)

  async function saveProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              deleteProduct={deleteProduct}
              getProducts={getProducts}
            />
          }
        />
        <Route path="/add" element={<AddForm add={add} />} />
        <Route
          path="/edit/:id"
          element={
            <EditForm
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
              saveProduct={saveProduct}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
