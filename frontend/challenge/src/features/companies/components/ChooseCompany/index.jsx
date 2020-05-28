import React, { useContext, useEffect } from "react";
import style from "../ChooseCompany/ChooseCompany.module.css";
import CardChoose from "../CardChoose";
import { Link } from "react-router-dom";
import CompanyContext from "../../../../context/company/CompanyContext";

const ChooseCompany = () => {
  //extrae compañias desde el state inicial
  const chooseCompany = useContext(CompanyContext);
  const { companies, getCompanies } = chooseCompany;

  //obtener compañias cuando carga el componente
  useEffect(() => {
    getCompanies();
  });
  //validar si hay o no compañias a mostrar
  if (companies.length === 0) {
    return (
      <div className="text-center">
        <h2>No hay Compañias, crea tu compañia.</h2>
        <Link to="/createcompany">Create tu compañia Aqui</Link>
      </div>
    );
  }

  return (
    <div className={style.gridChoose}>
      <div className={style.containerText}>
        <h5>Welcome New User!</h5>
        <h1>Choose the company you belong to</h1>
      </div>
      <div className={style.containerButton}>
        <Link to="/createcompany">
          <button className="btn btn-primary">CREATE NEW COMPANY</button>
        </Link>
      </div>
      {companies.map((companies) => (
        <CardChoose key={companies.id} company={companies} />
      ))}
    </div>
  );
};

export default ChooseCompany;
