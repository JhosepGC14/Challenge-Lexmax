import React, { useState, useContext, useEffect } from "react";
import style from "./CreateProduct.module.css";
import ProductContext from "../../../../context/products/ProductContex";
import CompanyContext from "../../../../context/company/CompanyContext";

const CreateProduct = () => {
  const proyectosContext = useContext(CompanyContext);
  const { company } = proyectosContext;

  // Extrar productos de state inicial
  const productsContext = useContext(ProductContext);
  const {
    addProducts,
    validateProducts,
    errorProduct,
    getProducts,
    productEdit,
    actualizarProducto,
  } = productsContext;

  //definimos el useEffecT
  useEffect(() => {
    if (productEdit !== null) {
      saveProduct(productEdit);
    } else {
      saveProduct({
        name: "",
        sku: "",
        price: "",
        discount: "",
      });
    }
  }, [productEdit]);

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
    if (
      name.trim() === ""
      // ||
      // sku.trim() === "" ||
      // price.trim() === "" ||
      // discount.trim() === ""
    ) {
      validateProducts();
      return;
    }

    //revisamos si es edicion o si es un nuevo producto
    if (productEdit === null) {
      //agregarel nuevo producto al state de productos
      products.companyId = proyectoActual.id;
      addProducts(products);
    } else {
      //actualiza el producto
      actualizarProducto(products);
    }

    getProducts(proyectoActual.id);

    //reiniciar el form
    saveProduct({
      name: "",
      sku: "",
      price: "",
      discount: "",
    });
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
        <input
          type="submit"
          className="btn btn-primary mt-3 w-100"
          value={productEdit ? "UPDATE NOW" : "CREATE NOW"}
        />
      </form>
      {errorProduct ? (
        <p className="bg-danger text-white rounded">
          Es Obligatorio llenar todos los campos
        </p>
      ) : null}
    </div>
  );
};

export default CreateProduct;
