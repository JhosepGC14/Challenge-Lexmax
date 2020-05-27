import React from "react";
import CardProduct from "../products/components/CardProduct";
import style from "./Product.module.css";

const Products = () => {
  const products = [
    {
      id: 3,
      companyId: 1,
      name: "Agua de Mesa",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "Coca-Cola",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "Alcohol en Gel",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
  ];

  return (
    <div className={style.container}>
      <h3>All Products</h3>
      <div className={style.gridProduct}>
        {products.length === 0 ? (
          <div>
            <h2>No hay productos</h2>
          </div>
        ) : (
          products.map((products) => <CardProduct products={products} />)
        )}
      </div>
    </div>
  );
};

export default Products;
