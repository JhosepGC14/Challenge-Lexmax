import React from "react";
import style from "../ChooseCompany/ChooseCompany.module.css";
import CardChoose from "../CardChoose";
import { Link } from "react-router-dom";

const ChooseCompany = () => {
  const companies = [
    {
      id: 1,
      name: "GMD Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 2,
      name: "Coursera Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 3,
      name: "Udemy Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 4,
      name: "Platzi Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 5,
      name: "EDteam Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 6,
      name: "Intranet Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 7,
      name: "Crehana Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
    {
      id: 8,
      name: "JAG Peru",
      ruc: "10987654320",
      website: "https://evilcorp.com",
    },
  ];

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
      {companies.map((company) => (
        <CardChoose company={company} />
      ))}
    </div>
  );
};

export default ChooseCompany;
