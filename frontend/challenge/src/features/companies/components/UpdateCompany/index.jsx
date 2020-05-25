import React from "react";
import style from "./UpdateCompany.module.css";

const UpdateCompany = () => {
  return (
    <div className={`col ${style.updateContainer}`}>
      <label>My Company</label>
      <h1>Update Information</h1>
      <div className={`form-group ${style.updateForm}`}>
        <label htmlFor="">Name Company:</label>
        <input
          className="form-control"
          type="email"
          placeholder="Ejem: LexMax Corp."
        />
        <label htmlFor="">RUC:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ejem: 10987654320"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        UPDATE NOW
      </button>
    </div>
  );
};

export default UpdateCompany;
