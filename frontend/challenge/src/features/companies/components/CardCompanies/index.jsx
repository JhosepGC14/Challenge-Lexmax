import React, { useContext } from "react";
import style from "./CardCompanies.module.css";
import { Link } from "react-router-dom";
import CompanyContext from "../../../../context/company/CompanyContext";
import ProductContext from "../../../../context/products/ProductContex";

const CardCompanies = ({ companies }) => {
  //extrae compañias desde el state inicial
  const companiesContext = useContext(CompanyContext);
  const { proyectoActual } = companiesContext;

  //obtener la funcion del context de product
  const productsContext = useContext(ProductContext);
  const { getProducts } = productsContext;

  //funcion para agregar la compañia actual
  const seleccionarCompany = (id) => {
    proyectoActual(id); //fijar la compañia actual
    getProducts(id); //filtrar las los productos cuando se le click
  };

  return (
    <div className={style.grid}>
      <div className={style.cardcompany}>
        <h2>
          <button
            onClick={() => seleccionarCompany(companies.id)}
            type="button"
            className="btn btn-light"
          >
            {companies.name}
          </button>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ipsum et vero harum expedita animi praesentium voluptatem accusamus,
          cumque cupiditate.
        </p>
        <Link className={style.absolute} to="/updatecompany">
          Edit Company+
        </Link>
      </div>
    </div>
  );
};

export default CardCompanies;
