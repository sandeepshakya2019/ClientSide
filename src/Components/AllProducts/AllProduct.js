import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Products from "../Product/Products";
import Create from "../CreateProduct/Create";
import {
  listProduct,
  remove,
  listProductMobile,
  listProductLaptop,
  listProductTv,
} from "../../Functions/product";
import { toast } from "react-toastify";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import CreateProductV from "../CreateProduct/CreateProductV";
import Productsv from "../Product/Productsv";

function AllProduct() {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState("");
  const [updateRender, setUpdateRender] = useState(false);
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [tv, setTv] = useState([]);
  const [mobile, setMobile] = useState([]);

  const [loading, setLoading] = useState(false);
  const [create, setCreate] = useState(false);
  const [createv, setCreateV] = useState(false);

  const [openv, setOpenv] = useState(false);
  const [productv, setProductv] = useState("");
  const [titlev, setTitlev] = useState("");
  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);

    listProduct(10)
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
        toast.success("Product Fetch Success");
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.message);
        toast.error(err.message);
      });
    listProductMobile(10)
      .then((res) => {
        setLoading(false);
        setMobile(res.data);
        toast.success("Mobile Fetch Success");
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.message);
        toast.error(err.message);
      });
    listProductLaptop(10)
      .then((res) => {
        setLoading(false);
        setLaptop(res.data);
        toast.success("Laptop Fetch Success");
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.message);
        toast.error(err.message);
      });
    listProductTv(10)
      .then((res) => {
        setLoading(false);
        setTv(res.data);
        toast.success("TV Fetch Success");
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.message);
        toast.error(err.message);
      });
  };
  const handleRemove = async (slug) => {
    if (window.confirm("Delete ? ") === true) {
      setLoading(true);
      remove(slug)
        .then((res) => {
          setLoading(false);
          // alert("Deleted");
          loadAllProducts();
          toast.success("Product Deleted");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    }
  };
  const handleUpdate = async (slug) => {
    setUpdateRender(true);
    setSlug(slug);
  };
  // console.log(products);

  if (create) {
    return <Create />;
  }
  if (createv) {
    return <CreateProductV />;
  }
  if (open) {
    return <Products name={product} />;
  }
  if (openv) {
    return <Productsv product={productv} title={titlev} />;
  }
  if (updateRender) {
    return <UpdateProduct name={slug} />;
  }
  return (
    <div className="container-fluid">
      <br />
      <center>{loading ? <h1>Loading ...</h1> : <h1>Products List</h1>}</center>
      <br />
      <div className="create btn btn-dark" onClick={(e) => setCreate(true)}>
        Click to Create the Product
      </div>
      <div className="create btn btn-dark" onClick={(e) => setCreateV(true)}>
        Click to Create the Varieties of Product
      </div>
      <br />
      <br />
      {/* {products &&
        products.map((item) => (
          <div key={item._id} class="alert alert-primary" role="alert">
            <p>
              <span
                className="title"
                onClick={(e) => {
                  setProduct(item.title);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleRemove(item.slug)}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleUpdate(item.slug)}
              >
                <EditOutlined className="text-success" />
              </span>
            </p>
          </div>
        ))} */}
      <h4>TV</h4>
      {tv &&
        tv.map((item) => (
          <div key={item._id} class="alert alert-primary" role="alert">
            <p>
              <span
                className="title"
                onClick={(e) => {
                  console.log(item);
                  setProductv(item.product);
                  setTitlev(item.title);

                  setOpenv(true);
                }}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleRemove(item.slug)}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleUpdate(item.slug)}
              >
                <EditOutlined className="text-success" />
              </span>
            </p>
          </div>
        ))}
      <h4>Mobile</h4>
      {mobile &&
        mobile.map((item) => (
          <div key={item._id} class="alert alert-primary" role="alert">
            <p>
              <span
                className="title"
                onClick={(e) => {
                  setProductv(item.product);
                  setTitlev(item.title);

                  setOpenv(true);
                }}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleRemove(item.slug)}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleUpdate(item.slug)}
              >
                <EditOutlined className="text-success" />
              </span>
            </p>
          </div>
        ))}
      <h4>Laptop</h4>
      {laptop &&
        laptop.map((item) => (
          <div key={item._id} class="alert alert-primary" role="alert">
            <p>
              <span
                className="title"
                onClick={(e) => {
                  setProductv(item.title);
                  setOpenv(true);
                }}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleRemove(item.slug)}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              <span
                className="btn btn-sm float-right"
                onClick={() => handleUpdate(item.slug)}
              >
                <EditOutlined className="text-success" />
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}

export default AllProduct;
