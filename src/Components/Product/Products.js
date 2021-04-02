import React, { useState, useEffect } from "react";
import AllProduct from "../AllProducts/AllProduct";
import { read } from "../../Functions/product";
import slugify from "react-slugify";
import "./Products.css";
import ReactModal from "react-modal-resizable-draggable";
function Products(props) {
  // To set the properties the product
  const [color, setColor] = useState("Red");
  const [size, setsize] = useState("Pls Choose the Size ");
  const [os, setos] = useState("Pls Choose the OS ");
  const [quality, setquality] = useState("Pls Choose the Quality");
  const [framerate, setframerate] = useState("Pls Choose the framerate ");
  const [price, setprice] = useState("Pls Choose the Price ");
  // to render the product all page
  const [close, setClose] = useState(false);
  // For loading purpose
  const [loading, setLoading] = useState(true);
  // to load the data of product
  const [one, setOne] = useState("");
  // For modal
  const [modal, setmodal] = useState(false);
  // for listen the click of the varieties
  const [clicksize, setclicksize] = useState("dsf");
  const [clickprice, setclickprice] = useState("as");
  const [clickos, setclickos] = useState("jk");
  const [clickquality, setclickquality] = useState("df");
  const [clickframerate, setclickframerate] = useState("jk");
  // Store the id of the product
  // const [id, setid] = useState("");

  let style = {
    backgroundColor: "none",
    cursor: "pointer",
    border: "1px dotted grey",
    padding: "5px",
  };

  // if (id) {
  // }

  if (color === "Red") {
    style = { ...style, backgroundColor: "red" };
  } else if (color === "Green") {
    style = { ...style, backgroundColor: "green" };
  } else if (color === "Blue") {
    style = { ...style, backgroundColor: "blue" };
  } else {
    style = { ...style };
  }

  const getProduct = React.useCallback(() => {
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
  }, [one.color, props.name]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);
  // console.log(one);

  if (close) {
    return <AllProduct />;
  }
  const openModal = () => {
    setmodal(true);
  };
  const closeModal = () => {
    setmodal(false);
  };
  return (
    <div className="container-fluid">
      <br />
      <button onClick={openModal} className="btn btn-success">
        See the Selected Varieties
      </button>
      <ReactModal
        initWidth={500}
        initHeight={350}
        onFocus={() => console.log("Modal is clicked")}
        className="my-modal-custom-class"
        onRequestClose={closeModal}
        isOpen={modal}
      >
        <center>
          <h3>Selected Product</h3>
        </center>
        <br />
        <div className="body container">
          <h4>Screen Size : {size}</h4>
          <h4>Operating System : {os}</h4>
          <h4>Quality : {quality}</h4>
          <h4>Frame Rate : {framerate}</h4>
          <h4>Price : {price}</h4>
        </div>
        <button className="btn btn-danger " onClick={closeModal}>
          Close modal
        </button>
      </ReactModal>
      <div className="container-fluid">
        <center>
          {loading ? <h1>Loading ...</h1> : <h1>{props.name}</h1>}
        </center>
        <button className="btn btn-danger" onClick={(e) => setClose(true)}>
          Back
        </button>
        <br />
        {/* <center>
          <h3>
            Selected Product : "{color}","{size} in inch" , "{os}" , "{quality}"
            , "{framerate}
            ","
            {price}"
          </h3>
        </center> */}
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 ">
              <img src={`/Images/${color}.png`} alt="Product_image" />
            </div>
            <div className="col-md-6 col-sm-6">
              <>
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
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {one.color
                      ? one.color.split(",").map((item, index) => (
                          <p
                            key={index}
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
                          {one.description
                            ? one.description
                            : "product not found"}
                        </span>
                      </li>
                    </ul>
                    <ul className="list-group">
                      <li className="list-group-item">
                        Color
                        {/* {one.color ? one.color : "product not found"} */}
                        {one.color &&
                          one.color.split(",").map((item, index) =>
                            item === color ? (
                              <span
                                key={index}
                                className={`label label-default label-pill pull-xs-right`}
                                style={style}
                                onClick={(e) => {
                                  setColor(item);
                                }}
                              >
                                {item}
                              </span>
                            ) : (
                              <span
                                key={index}
                                className={`label label-default label-pill pull-xs-right`}
                                style={{ cursor: "pointer" }}
                                onClick={(e) => {
                                  setColor(item);
                                }}
                              >
                                {item}
                                {/* {console.log("item" + item)} */}
                              </span>
                            )
                          )}
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
              </>
            </div>
          </div>
        </div>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Screen Size</th>
              <th>Operating System</th>
              <th>Quality</th>
              <th>Frame Rate</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {one ? (
              <tr>
                <td>
                  {one.screensize
                    ? one.screensize.split(",").map((item, index) => (
                        <td
                          key={index}
                          className={`item_fetch a${clicksize}`}
                          onClick={(e) => {
                            setclicksize(index);
                            setsize(item);
                          }}
                        >
                          {item} inch
                        </td>
                      ))
                    : "product not found"}
                </td>
                <td>
                  {one.operatingsystem
                    ? one.operatingsystem.split(",").map((item, index) => (
                        <td
                          key={index}
                          className={`item_fetch a${clickos}`}
                          onClick={(e) => {
                            setclickos(index);
                            setos(item);
                          }}
                        >
                          {item}
                        </td>
                      ))
                    : "product not found"}
                </td>
                <td>
                  {one.quality
                    ? one.quality.split(",").map((item, index) => (
                        <td
                          key={index}
                          className={`item_fetch a${clickquality}`}
                          onClick={() => {
                            // setclick(true);
                            setclickquality(index);
                            setquality(item);
                          }}
                        >
                          {item}
                        </td>
                      ))
                    : "product not found"}
                </td>
                <td>
                  {one.framerate
                    ? one.framerate.split(",").map((item, index) => (
                        <td
                          key={index}
                          className={`item_fetch a${clickframerate}`}
                          onClick={() => {
                            setclickframerate(index);
                            setframerate(item);
                          }}
                        >
                          {item} GHz
                        </td>
                      ))
                    : "product not found"}
                </td>
                <td>
                  {one.price
                    ? one.price.split(",").map((item, index) => (
                        <td
                          className={`item_fetch a${clickprice}`}
                          key={index}
                          onClick={(e) => {
                            console.log(clickprice);
                            console.log(e.target);
                            setclickprice(index);
                            setprice(item);
                          }}
                        >
                          {item} Rs
                        </td>
                      ))
                    : "product not found"}
                </td>
              </tr>
            ) : (
              "No Product is loaded"
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
