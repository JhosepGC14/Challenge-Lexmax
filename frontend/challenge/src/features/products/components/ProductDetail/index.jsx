import React from "react";
import style from "./ProductDetail.module.css";
import ProductImage from "../../../../assets/images/product.png";
import CardProduct from "../CardProduct";

const ProductDetail = () => {
  return (
    <div className={style.gridContainer}>
      <div className={style.containerImg}>
        <img src={ProductImage} alt="ProductImage" />
      </div>
      <div className={style.containerText}>
        <h5>Category</h5>
        <h2>Product N°1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eius consequuntur accusantium. Sapiente suscipit ipsa facilis est
          similique pariatur illum.
        </p>
        <h3>$200.00</h3>
        <button className="btn btn-primary">ADD TO CART</button>
      </div>
      <div className={style.allProducts}>
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
    </div>
  );
};

export default ProductDetail;
