import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Aside";
import Products from "../products";
import style from "./Companies.module.css";
import AuthContext from "../../context/autentication/authContext";

const Companies = () => {
  //extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { userAuthenticated } = authContext;

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.containerAside}>
      <Sidebar />
      <div className={style.containerListProducts}>
        <Products />
      </div>
    </div>
  );
};

export default Companies;
