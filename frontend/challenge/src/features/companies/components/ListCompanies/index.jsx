import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CardCompanies from "../CardCompanies";
import style from "./Companies.module.css";
import CompanyContext from "../../../../context/company/CompanyContext";

const ListCompanies = () => {
  const chooseCompany = useContext(CompanyContext);
  const { companies, getCompanies } = chooseCompany;

  //obtener compañias cuando carga el componente
  useEffect(() => {
    getCompanies();
    //eslint-disable-next-line
  }, []);

  //validar si hay o no compañias a mostrar
  if (companies.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>No hay compañias, crea tu compañia.</h2>
        <Link to="/createcompany">Create tu compañia Aqui</Link>
      </div>
    );
  }

  return (
    <div className={style.container}>
      {companies.map((companies) => (
        <CardCompanies key={companies.id} companies={companies} />
      ))}
    </div>
  );
};

export default ListCompanies;
