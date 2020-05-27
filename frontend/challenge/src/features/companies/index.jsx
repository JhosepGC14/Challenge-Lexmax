import React, { useContext, Fragment } from "react";
import CardCompanies from "./components/CardCompanies";
import CardProduct from "../products/components/CardProduct";
import style from "./Companies.module.css";
import CompanyContext from "../../context/company/CompanyContext";

const Companies = () => {
  const companias = [
    {
      id: 1,
      name: "GMD Peru SAC",
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
  const products = [
    {
      id: 1,
      companyId: 1,
      name: "Agua de Mesa",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 2,
      companyId: 1,
      name: "Coca-Cola",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 4,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 5,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 6,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 7,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 8,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
    {
      id: 9,
      companyId: 1,
      name: "product 2",
      sku: "DP18-Bk-T1",
      price: 100,
      discount: 10,
    },
  ];
  //extrae compañias desde el state inicial
  const chooseCompany = useContext(CompanyContext);
  const { company } = chooseCompany;

  //si no hay compañia seleccionada
  if (!company) return <h2 className="text-center">Seleciona Un Proyecto</h2>;

  //array destructuring para extraer la compañia actual
  const [selectCurrent] = company;

  return (
    <Fragment className={style.container}>
      {companias.map((companias) => (
        <CardCompanies key={companias.id} companias={companias} />
      ))}
      <h3>All Products of {company.name}</h3>
      <div className={style.gridProduct}>
        {products.length === 0 ? (
          <div>
            <h2>No hay productos</h2>
          </div>
        ) : (
          products.map((products) => (
            <CardProduct key={products.id} products={products} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Companies;
