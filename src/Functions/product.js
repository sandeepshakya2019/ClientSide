import axios from "axios";

export const createProduct = async (product) => {
  return await axios.post(process.env.REACT_APP_API + "/product", product);
};

export const createProductV = async (product) => {
  return await axios.post(process.env.REACT_APP_API + "/productDef", product);
};

export const listProduct = async (count) => {
  return await axios.get(process.env.REACT_APP_API + "/products/" + count);
};

export const listProductTv = async (count) => {
  return await axios.get(process.env.REACT_APP_API + "/productstv/" + count);
};

export const listProductLaptop = async (count) => {
  return await axios.get(
    process.env.REACT_APP_API + "/productslaptop/" + count
  );
};

export const listProductMobile = async (count) => {
  return await axios.get(
    process.env.REACT_APP_API + "/productsmobile/" + count
  );
};

export const updateProduct = async (product, slugpast) => {
  return await axios.put(
    process.env.REACT_APP_API + `/products/${slugpast}`,
    product
  );
};

export const getProductsCount = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/products/total`);
};

export const read = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/productget/${slug}`);
};

export const readv = async (slug, product) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/productgetv/${slug}`,
    product
  );
};

export const remove = async (slug) => {
  return await axios.delete(process.env.REACT_APP_API + "/product/" + slug);
};
