import axios from "axios";

export const createProduct = async (product) => {
  return await axios.post(process.env.REACT_APP_API + "/product", product);
};

export const listProduct = async (count) => {
  return await axios.get(process.env.REACT_APP_API + "/products/" + count);
};

export const getProductsCount = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/products/total`);
};

export const read = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/productget/${slug}`);
};

export const remove = async (slug) => {
  return await axios.delete(process.env.REACT_APP_API + "/product/" + slug);
};
