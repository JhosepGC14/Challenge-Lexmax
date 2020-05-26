import React, { useState } from "react";
import style from "./CreateCompany.module.css";

const CreateCompany = () => {
  //state para crear compañia
  const [company, createCompany] = useState({
    nameCompany: "",
    ruc: "",
  });

  //extraer compañias
  const { nameCompany, ruc } = company;

  //definimos el onChange
  const onCompany = (e) => {
    createCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario cree su compañia
  const onSubmit = (e) => {
    e.preventDefault();

    //validar el proyecto

    //agregar al state

    //reiniciar el form
  };

  return (
    <form onSubmit={onSubmit} className={`col ${style.createContainer}`}>
      <label>Welcome new user!</label>
      <h1>Create new Company</h1>
      <div className={`form-group ${style.containerForm}`}>
        <label htmlFor="">Name Company:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ejem: LexMax Corp."
          value={nameCompany}
          name="nameCompany"
          onChange={onCompany}
        />
        <label htmlFor="">RUC:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ejem: 10987654320"
          value={ruc}
          name="ruc"
          onChange={onCompany}
        />
      </div>
      <button type="submit" className="btn btn-primary" value="createCompany">
        CREATE AND JOIN COMPANY
      </button>
    </form>
  );
};

export default CreateCompany;
