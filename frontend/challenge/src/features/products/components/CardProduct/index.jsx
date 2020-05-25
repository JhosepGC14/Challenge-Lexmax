import React from "react";
import style from "./CardProduct.module.css";
import { Link } from "react-router-dom";

const CardProduct = () => {
  return (
    <div className={style.cardProduct}>
      <div className={style.desc}>
        <span>-20%</span>
      </div>
      <p>Product N°1</p>
      <span>$200.00</span>
      <Link to="/productdetail">
        <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default CardProduct;
