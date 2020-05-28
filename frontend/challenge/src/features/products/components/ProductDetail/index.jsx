import React from "react";
import style from "./ProductDetail.module.css";
import ProductImage from "../../../../assets/images/product.png";
import CardProduct from "../CardProduct";
// import ProductContext from "../../../../context/products/ProductContex";

const ProductDetail = () => {
  // Extrar productos de state inicial
  // const productsContext = useContext(ProductContext);
  // const { productsCompany } = productsContext;
  const products = [
    {
      id: 1,
      companyId: 1,
      name: "Agua de Mesa",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 10,
      companyId: 1,
      name: "Agua de Mesa2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 2,
      companyId: 1,
      name: "Coca-Cola",
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
      id: 4,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 5,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 6,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 7,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 8,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 9,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
  ];
  return (
    <div className={style.gridContainer}>
      <div className={style.containerImg}>
        <img src={ProductImage} alt="ProductImage" />
      </div>
      <div className={style.containerText}>
        <h5>Category</h5>
        <h2>{products[2].name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eius consequuntur accusantium. Sapiente suscipit ipsa facilis est
          similique pariatur illum.
        </p>
        <h3>$ {products[2].price}</h3>
        <button className="btn btn-primary">ADD TO CART</button>
      </div>
      <div className={style.allProducts}>
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
    </div>
  );
};

export default ProductDetail;
