import React, { useState } from "react";
import { createProductV } from "../../Functions/product";
import { toast } from "react-toastify";
import AllProduct from "../AllProducts/AllProduct";
function CreateProductV() {
  const initialProductTV = {
    product: "tv",
    title: "",
    description: "",
    quantity: "",
    color: "",
    screensize: "",
    operatingsystem: "",
    framerate: "",
    quality: "",
    price: "",
  };
  const initialProductMobile = {
    product: "mobile",
    title: "",
    description: "",
    quantity: "",
    color: "",
    screensize: "",
    ram: "",
    storage: "",
    price: "",
  };
  const initialProductLaptop = {
    product: "laptop",
    title: "",
    description: "",
    quantity: "",
    color: "",
    screensize: "",
    operatingsystem: "",
    ram: "",
    storage: "",
    processor: "",
    price: "",
  };

  const [product, setProduct] = useState("mobile");
  const [close, setClose] = useState(false);
  const [values, setValues] = useState(changePro);
  const [loading, setLoading] = useState(false);

  function changePro() {
    if (product === "tv") {
      return initialProductTV;
    } else if (product === "mobile") {
      return initialProductMobile;
    } else if (product === "laptop") {
      return initialProductLaptop;
    } else {
      return 0;
    }
  }
  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleProduct = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    setProduct(e.target.getAttribute("value"));
    setValues({
      ...values,
      [e.target.getAttribute("name")]: e.target.getAttribute("value"),
    });
  };
  const handleProductSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    // setLoading(true);

    createProductV(values)
      .then((res) => {
        toast.success("Product Created Success");
        window.location.reload();
      })
      .catch((err) => {
        // toast.error("Product Create Failed");
        setLoading(false);
        toast.error(err.message);
        // toast.error(err.response);
        // console.log(err.response.data);
      });
  };
  if (close) {
    return <AllProduct />;
  }
  return (
    <>
      <div className="container-fluid">
        <center>
          {loading ? <h2> Loading Product ...</h2> : <h2>Create Product</h2>}
        </center>
        <button className="btn btn-danger" onClick={(e) => setClose(true)}>
          Back
        </button>
        <div className="product">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              name="product"
              //   onClick={(e) => console.log(e.target.name)}
            >
              {product}
            </button>
            <div className="dropdown-menu">
              <span
                className="dropdown-item"
                value="mobile"
                name="product"
                onClick={handleProduct}
              >
                Mobile
              </span>
              <span
                className="dropdown-item"
                value="tv"
                name="product"
                onClick={handleProduct}
              >
                Television (TV)
              </span>
              <span
                className="dropdown-item"
                value="laptop"
                name="product"
                onClick={handleProduct}
              >
                Laptops
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product_form container-fluid">
        <form onSubmit={handleProductSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="title"
              value={values.title}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title of Product"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Description</label>
            <input
              type="text"
              name="description"
              value={values.description}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Description of Product"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1"> Available Quantity</label>
            <input
              type="number"
              value={values.quantity}
              name="quantity"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Total Quantity Available with Product"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Color</label>
            <input
              type="text"
              value={values.color}
              name="color"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Color of the Product Available"
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Please Seprate the color value using the comma
            </small>
          </div>

          <h3 className="variant alert alert-primary">Variant</h3>

          {product === "tv" && (
            <>
              {" "}
              <div className="form-group">
                <label for="exampleInputPassword1">Screen Size</label>
                <input
                  type="text"
                  name="screensize"
                  value={values.screensize}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Screen Size of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field (screen size should be in inch)
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Operating System</label>
                <input
                  type="text"
                  name="operatingsystem"
                  value={values.operatingsystem}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="OS in TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Qaulity</label>
                <input
                  type="text"
                  name="quality"
                  value={values.quality}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Quality of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Frame Rate</label>
                <input
                  type="text"
                  name="framerate"
                  value={values.framerate}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Frame Rate of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input
                  type="text"
                  name="price"
                  value={values.price}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Price of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
            </>
          )}

          {product === "mobile" && (
            <>
              {" "}
              <div className="form-group">
                <label for="exampleInputPassword1">Screen Size</label>
                <input
                  type="text"
                  name="screensize"
                  value={values.screensize}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Screen Size of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field (screen size should be in inch)
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">RAM</label>
                <input
                  type="text"
                  name="ram"
                  value={values.ram}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="OS in TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Storage</label>
                <input
                  type="text"
                  name="storage"
                  value={values.storage}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Quality of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input
                  type="text"
                  name="price"
                  value={values.price}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Price of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
            </>
          )}

          {product === "laptop" && (
            <>
              {" "}
              <div className="form-group">
                <label for="exampleInputPassword1">Screen Size</label>
                <input
                  type="text"
                  name="screensize"
                  value={values.screensize}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Screen Size of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field (screen size should be in inch)
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Operating System</label>
                <input
                  type="text"
                  name="operatingsystem"
                  value={values.operatingsystem}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="OS in TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">RAM</label>
                <input
                  type="text"
                  name="ram"
                  value={values.ram}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Quality of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Storage</label>
                <input
                  type="text"
                  name="storage"
                  value={values.storage}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Frame Rate of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Processor</label>
                <input
                  type="text"
                  name="processor"
                  value={values.processor}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Frame Rate of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input
                  type="text"
                  name="price"
                  value={values.price}
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Price of TV"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please Seprate the value using the comma and folow the orders
                  in all input field
                </small>
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateProductV;
