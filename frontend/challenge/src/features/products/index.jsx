import React from "react";
import CardProduct from "../products/components/CardProduct";
import style from "./Product.module.css";

const Products = () => {
  return (
    <div className={style.container}>
      <h3>All Products</h3>
      <div className={style.gridProduct}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default Products;
