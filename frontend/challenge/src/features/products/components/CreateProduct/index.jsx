import React from "react";
import style from "./CreateProduct.module.css";

const CreateProduct = () => {
  return (
    <div className={`col ${style.createContainer}`}>
      <label>My Company</label>
      <h1>Create Product</h1>
      <form className={`form-group ${style.containerForm}`}>
        <label htmlFor="">NAME PRODUCT:</label>
        <input
          className="form-control"
          type="text"
          name="nameproduct"
          placeholder="Ejem: Product N°12."
        />
        <label htmlFor="">SKU:</label>
        <input
          className="form-control"
          type="text"
          name="sku"
          placeholder="Ejem: DP18-Bk-T."
        />
        <div className="row">
          <div className="col">
            <label htmlFor="">PRICE:</label>
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Ejem: $200."
            />
          </div>
          <div className="col">
            <label htmlFor="">DISCOUNT:</label>
            <input
              className="form-control"
              type="number"
              name="discount"
              placeholder="Ejem: 10%."
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
