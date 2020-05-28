import React, { useContext, useEffect } from "react";
import CardCompanies from "../CardCompanies";
import style from "./Companies.module.css";
import CompanyContext from "../../../../context/company/CompanyContext";

const ListCompanies = () => {
  const chooseCompany = useContext(CompanyContext);
  const { companies, getCompanies } = chooseCompany;

  //obtener compañias cuando carga el componente
  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className={style.container}>
      {companies.map((companies) => (
        <CardCompanies key={companies.id} companies={companies} />
      ))}
    </div>
  );
};

export default ListCompanies;
