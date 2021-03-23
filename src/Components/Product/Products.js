import React, { useState, useEffect } from "react";
import AllProduct from "../AllProducts/AllProduct";
import { read } from "../../Functions/product";
import slugify from "react-slugify";

function Products(props) {
  const [color, setColor] = useState("");
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(true);
  const [one, setOne] = useState("");

  useEffect(() => {
    // getProductsCount();
    getProduct();
  }, []);
  const getProduct = () => {
    // console.log(props.name);
    let main = slugify(props.name);
    setLoading(true);
    read(main)
      .then((res) => {
        setLoading(false);
        setOne(res.data);
        if (one.color) {
          setColor(
            one.color.split(",")[0].slice(0, 1).toLowerCase() +
              one.color.split(",")[0].slice(1).toLowerCase()
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error", err);
      });
  };

  // console.log(one);

  if (close) {
    return <AllProduct />;
  }
  return (
    <div>
      <center>{loading ? <h1>Loading ...</h1> : <h1>{props.name}</h1>}</center>
      <button className="btn btn-danger" onClick={(e) => setClose(true)}>
        Back
      </button>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img
              src={`/Images/${color}.png`}
              alt="Product_image"
              width="250"
              height="250"
            />
          </div>
          <div className="col">
            <div class="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose Color
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {one.color
                  ? one.color.split(",").map((item) => (
                      <p
                        className="dropdown-item"
                        onClick={(e) => setColor(e.target.innerText)}
                      >
                        {item}
                      </p>
                    ))
                  : "Chekcing ..."}
              </div>
            </div>
            <div className="img_desc">
              <div className="product_info">
                <ul className="list-group">
                  <li className="list-group-item">
                    Name
                    <span className="label label-default label-pill pull-xs-right">
                      {one.title ? one.title : "product not found"}
                    </span>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item">
                    Description
                    <span className="label label-default label-pill pull-xs-right">
                      {one.description ? one.description : "product not found"}
                    </span>
                  </li>
                </ul>
                <ul className="list-group">
                  <li className="list-group-item">
                    Color
                    <span className="label label-default label-pill pull-xs-right">
                      {one.color ? one.color : "product not found"}
                    </span>
                  </li>
                </ul>
                <ul className="list-group">
                  <li className="list-group-item">
                    Selectd Color
                    <span className="label label-default label-pill pull-xs-right">
                      {color.slice(0, 1).toUpperCase() + color.slice(1)}
                    </span>
                  </li>
                </ul>

                <ul className="list-group">
                  <li className="list-group-item">
                    Available Quantity
                    <span className="label label-default label-pill pull-xs-right">
                      {one.quantity ? one.quantity : "product not found"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="product_varient">
          <ul className="list-group">
            <li className="list-group-item">
              Screen Size
              {one.screensize
                ? one.screensize
                    .split(",")
                    .map((item) => (
                      <span className="label label-default label-pill pull-xs-right">
                        {item} inch
                      </span>
                    ))
                : "product not found"}
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              Operating System
              {one.operatingsystem
                ? one.operatingsystem
                    .split(",")
                    .map((item) => (
                      <span className="label label-default label-pill pull-xs-right">
                        {item}
                      </span>
                    ))
                : "product not found"}
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              Qaulity
              {one.quality
                ? one.quality
                    .split(",")
                    .map((item) => (
                      <span className="label label-default label-pill pull-xs-right">
                        {item}
                      </span>
                    ))
                : "product not found"}
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              Frame Rate
              {one.framerate
                ? one.framerate
                    .split(",")
                    .map((item) => (
                      <span className="label label-default label-pill pull-xs-right">
                        {item} GHz
                      </span>
                    ))
                : "product not found"}
            </li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              Price
              {one.price
                ? one.price
                    .split(",")
                    .map((item) => (
                      <span className="label label-default label-pill pull-xs-right">
                        {item} Rs
                      </span>
                    ))
                : "product not found"}
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Products;
