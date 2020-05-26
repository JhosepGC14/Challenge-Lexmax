import React from "react";
import style from "./CardChoose.module.css";
import LogoLexmax from "../../../../assets/images/logo.png";

const CardChoose = ({company}) => {
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
