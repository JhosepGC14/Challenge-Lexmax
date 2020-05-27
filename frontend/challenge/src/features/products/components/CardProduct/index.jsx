import React from "react";
import style from "./CardProduct.module.css";
import { Link } from "react-router-dom";

const CardProduct = ({ products }) => {
  return (
    <div className={style.cardProduct}>
      <div className={style.desc}>
        <span>{products.discount}%</span>
      </div>
      <p>{products.name}</p>
      <span>{products.price}</span>
      <Link to="/productdetail">
        <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default CardProduct;
