import React from "react";
import style from "./CardChoose.module.css";
import LogoLexmax from "../../../../assets/images/logo.png";

const CardChoose = () => {
  return (
    <div className={style.cardContainer}>
      <div>
        <img src={LogoLexmax} alt="" />
      </div>
      <div>
        <p>Chemifabrik SAC</p>
        <span>Lideres de pinturas</span>
      </div>
      <a href="#!">Choose Company</a>
    </div>
  );
};

export default CardChoose;
