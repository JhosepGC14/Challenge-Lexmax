import React from "react";
import CardCompanies from "./components/CardCompanies";
import CardProduct from "../products/components/CardProduct";
import style from "./Companies.module.css";

const Companies = () => {


  return (
    <div className={style.container}>
      <CardCompanies />
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

export default Companies;
