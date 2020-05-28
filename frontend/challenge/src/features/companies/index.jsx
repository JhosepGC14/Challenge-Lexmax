import React from "react";
import Sidebar from "../../components/Aside";
import Products from "../products";
import style from "./Companies.module.css";

const Companies = () => {
  return (
    <div className={style.containerAside}>
      <Sidebar />
      <div className={style.containerListProducts}>
        <Products />
      </div>
    </div>
  );
};

export default Companies;
