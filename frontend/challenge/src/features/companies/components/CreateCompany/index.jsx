import React from "react";
import style from "./CreateCompany.module.css";

const CreateCompany = () => {
  return (
    <div className={`col ${style.createContainer}`}>
      <label>Welcome new user!</label>
      <h1>Create new Company</h1>
      <div className={`form-group ${style.containerForm}`}>
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
        CREATE AND JOIN COMPANY
      </button>
    </div>
  );
};

export default CreateCompany;
