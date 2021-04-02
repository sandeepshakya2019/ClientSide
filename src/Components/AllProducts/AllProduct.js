import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Products from "../Product/Products";
import Create from "../CreateProduct/Create";
import { listProduct, remove } from "../../Functions/product";
import { toast } from "react-toastify";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

function AllProduct() {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState("");
  const [updateRender, setUpdateRender] = useState(false);
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    listProduct(10)
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleRemove = async (slug) => {
    if (window.confirm("Delete ? ") === true) {
      setLoading(true);
      // console.log(slug);
      remove(slug)
        .then((res) => {
          setLoading(false);
          alert("Deletd");
          toast.success("Category Deleted");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data);
        });
    }
  };
  const handleUpdate = async (slug) => {
    setUpdateRender(true);
    setSlug(slug);
  };
  // console.log(products);
  const [create, setCreate] = useState(false);

  if (create) {
    return <Create />;
  }
  if (open) {
    return <Products name={product} />;
  }
  if (updateRender) {
    return <UpdateProduct name={slug} />;
  }
  return (
    <div className="container-fluid">
      <br />
      <center>{loading ? <h1>Loading ...</h1> : <h1>Products List</h1>}</center>
      <br />
      <div className="create" onClick={(e) => setCreate(true)}>
        Click to Create the Product
      </div>
      <br />

      {products.map((item) => (
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
      ))}
    </div>
  );
}

export default AllProduct;
