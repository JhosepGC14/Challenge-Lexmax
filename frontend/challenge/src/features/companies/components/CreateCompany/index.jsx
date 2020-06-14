import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./CreateCompany.module.css";
import CompanyContext from "../../../../context/company/CompanyContext";

const CreateCompany = () => {
  //extrae compañias desde el state inicial
  const addCompany = useContext(CompanyContext);
  const { addCompanies, errorForm, validateForm, alreadyCreate } = addCompany;

  //state para crear compañia
  const [company, createCompany] = useState({
    name: "",
    ruc: "",
    website: "",
  });

  const history = useHistory();
  useEffect(() => {
    if (alreadyCreate === true) {
      history.push("/companies");
    }
    // eslint-disable-next-line
  }, [alreadyCreate]);

  //extraer compañias
  const { name, ruc, website } = company;

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
    if (name === "") {
      validateForm();
      return;
    }

    //agregar al state
    addCompanies(company);

    //reiniciar el form
    createCompany({
      name: "",
      ruc: "",
      website: "",
    });
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
          value={name}
          name="name"
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
        <label htmlFor="">Website:</label>
        <input
          className="form-control"
          type="email"
          placeholder="Ejem: website@lexmax.com"
          value={website}
          name="website"
          onChange={onCompany}
        />
      </div>
      <button type="submit" className="btn btn-primary" value="createCompany">
        CREATE AND JOIN COMPANY
      </button>
      {errorForm ? (
        <p className="text-light bg-danger mt-3 rounded">
          Es Obligatorio Completar Todos los Campos
        </p>
      ) : null}
    </form>
  );
};

export default CreateCompany;
