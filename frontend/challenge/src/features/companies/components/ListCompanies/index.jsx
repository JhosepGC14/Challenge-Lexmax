import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CardCompanies from "../CardCompanies";
import style from "./Companies.module.css";
import CompanyContext from "../../../../context/company/CompanyContext";
import CreateCompany from "../CreateCompany";

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
        <Link to="/createcompany">CREATE NEW COMPANY</Link>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.create}>
        <button
          type="button"
          data-toggle="modal"
          data-target="#createcompany"
          className="btn btn-primary"
        >
          CREATE NEW COMPANY
        </button>
      </div>
      <div
        className="modal fade"
        id="createcompany"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-5">
            <CreateCompany />
          </div>
        </div>
      </div>
      {companies.map((companies) => (
        <CardCompanies key={companies.id} companies={companies} />
      ))}
    </div>
  );
};

export default ListCompanies;
