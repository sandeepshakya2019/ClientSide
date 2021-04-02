import React from "react";
import "./App.css";
import AllProduct from "./Components/AllProducts/AllProduct";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AllProduct />
    </div>
  );
}

export default App;
