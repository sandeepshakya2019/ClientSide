import React from "react";
import "./App.css";
import AllProduct from "./Components/AllProducts/AllProduct";
import { ToastContainer } from "react-toastify";
import CreateProductV from "./Components/CreateProduct/CreateProductV";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AllProduct />
      {/* <CreateProductV /> */}
    </div>
  );
}

export default App;
