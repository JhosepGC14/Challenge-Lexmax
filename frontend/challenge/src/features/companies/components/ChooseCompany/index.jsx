import React from "react";
import style from "../ChooseCompany/ChooseCompany.module.css";
import CardChoose from "../CardChoose";
import { Link } from "react-router-dom";

const ChooseCompany = () => {
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
      <CardChoose />
      <CardChoose />
      <CardChoose />
      <CardChoose />
      <CardChoose />
      <CardChoose />
      <CardChoose />
      <CardChoose />
    </div>
  );
};

export default ChooseCompany;
