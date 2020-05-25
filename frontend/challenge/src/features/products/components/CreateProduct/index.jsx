import React from "react";
import style from "./CreateProduct.module.css";

const CreateProduct = () => {
  return (
    <div className={`col ${style.createContainer}`}>
      <label>My Company</label>
      <h1>Create Product</h1>
      <div className={`form-group ${style.containerForm}`}>
        <label htmlFor="">NAME PRODUCT:</label>
        <input
          className="form-control"
          type="email"
          placeholder="Ejem: Product N°12."
        />
        <label htmlFor="">SKU:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ejem: DP18-Bk-T."
        />
        <div className="row">
          <div className="col">
            <label htmlFor="">PRICE:</label>
            <input
              className="form-control"
              type="number"
              placeholder="Ejem: $200."
            />
          </div>
          <div className="col">
            <label htmlFor="">DISCOUNT:</label>
            <input
              className="form-control"
              type="number"
              placeholder="Ejem: 10%."
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        CREATE NOW
      </button>
    </div>
  );
};

export default CreateProduct;
