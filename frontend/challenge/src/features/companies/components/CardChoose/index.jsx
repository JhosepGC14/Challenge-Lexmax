import React, { useContext, useEffect } from "react";
import style from "./CardChoose.module.css";
import LogoLexmax from "../../../../assets/images/logo.png";
import CompanyContext from "../../../../context/company/CompanyContext";

const CardChoose = ({ company }) => {
  const chooseCompany = useContext(CompanyContext);
  const { getCompanies } = chooseCompany;

  //obtener compañias cuando carga el componente
  useEffect(() => {
    getCompanies();
  });
  return (
    <div className={style.cardContainer}>
      <div>
        <img src={LogoLexmax} alt="" />
      </div>
      <div>
        <p>{company.name}</p>
        <span>{company.ruc}</span>
      </div>
      <a href="#!">{company.website}</a>
    </div>
  );
};

export default CardChoose;
