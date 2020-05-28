import React, { useState, useContext } from "react";
import style from "./CreateProduct.module.css";
import ProductContext from "../../../../context/products/ProductContex";
import CompanyContext from "../../../../context/company/CompanyContext";

const CreateProduct = () => {
  // Extrar productos de state inicial
  const productsContext = useContext(ProductContext);
  const { addProducts } = productsContext;

  const proyectosContext = useContext(CompanyContext);
  const { company } = proyectosContext;

  //state del form
  const [products, saveProduct] = useState({
    name: "",
    sku: "",
    price: "",
    discount: "",
  });
  const { name, sku, price, discount } = products;

  if (!company) return null;
  const [proyectoActual] = company;

  const handleChange = (e) => {
    saveProduct({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validar

    //Pasar la validacion

    //agregarel nuevo producto al state de productos
    products.companyId = proyectoActual.id;
    addProducts(products);
    //reiniciar el form
  };

  return (
    <div className={`col ${style.createContainer}`}>
      <label>My Company</label>
      <h1>Create Product</h1>
      <form onSubmit={onSubmit} className={`form-group ${style.containerForm}`}>
        <label htmlFor="">NAME PRODUCT:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Ejem: Product N°12."
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="">SKU:</label>
        <input
          className="form-control"
          type="text"
          name="sku"
          placeholder="Ejem: DP18-Bk-T."
          onChange={handleChange}
          value={sku}
        />
        <div className="row">
          <div className="col">
            <label htmlFor="">PRICE:</label>
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Ejem: $200."
              onChange={handleChange}
              value={price}
            />
          </div>
          <div className="col">
            <label htmlFor="">DISCOUNT:</label>
            <input
              className="form-control"
              type="number"
              name="discount"
              placeholder="Ejem: 10%."
              onChange={handleChange}
              value={discount}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-100">
          CREATE NOW
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
