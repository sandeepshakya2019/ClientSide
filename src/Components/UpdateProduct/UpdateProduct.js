import React, { useState, useEffect } from "react";
import AllProduct from "../AllProducts/AllProduct";
import { updateProduct } from "../../Functions/product";
import { toast } from "react-toastify";
import slugify from "react-slugify";
import { read } from "../../Functions/product";

function UpdateProduct(props) {
  const initialProduct = {
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
  const [close, setClose] = useState(false);
  const [one, setOne] = useState("");
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState(initialProduct);

  const getProduct = () => {
    // console.log(props.name);
    let main = slugify(props.name);
    setLoading(true);
    read(main)
      .then((res) => {
        setLoading(false);
        setOne(res.data);
        toast.success(
          "Please click on the Update to fill Previous Values of the Product"
        );
      })
      .catch((err) => {
        setLoading(false);
        // console.log("Error", err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  // console.log(one);

  //   fillProduct();

  const handleProductSubmit = (e) => {
    e.preventDefault();
    let slugpast = slugify(props.name);
    setLoading(true);
    updateProduct(values, slugpast)
      .then((res) => {
        toast.success("Product is Updated");
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const fillProduct = () => {
    console.log(one);
    setValues({
      title: one.title,
      description: one.description,
      quantity: one.quantity,
      color: one.color,
      screensize: one.screensize,
      framerate: one.framerate,
      operatingsystem: one.operatingsystem,
      quality: one.quality,
      price: one.price,
    });
  };

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (close) {
    return <AllProduct />;
  }
  return (
    <div className="container">
      <button className="btn btn-danger" onClick={(e) => setClose(true)}>
        Back
      </button>
      <button className="btn btn-success" onClick={fillProduct}>
        {loading ? "Loading ..." : "Update"}
      </button>
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
            Please Seprate the value using the comma and folow the orders in all
            input field (screen size should be in inch)
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
            Please Seprate the value using the comma and folow the orders in all
            input field
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
            Please Seprate the value using the comma and folow the orders in all
            input field
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
            Please Seprate the value using the comma and folow the orders in all
            input field
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
            Please Seprate the value using the comma and folow the orders in all
            input field
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
