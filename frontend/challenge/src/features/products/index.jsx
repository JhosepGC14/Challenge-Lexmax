import React, { useContext } from "react";
import CardProduct from "../products/components/CardProduct";
import style from "./Product.module.css";
import CompanyContext from "../../context/company/CompanyContext";

const Products = () => {
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
  // Extrar proyectos de state inicial
  const proyectosContext = useContext(CompanyContext);
  const { company } = proyectosContext;

  if (!company)
    return (
      <h2 className="text-center mt-5">
        Seleccione una Empresa para ver sus Productos
      </h2>
    );

  //array destructuring para extraer la compañia actual
  const [proyectoActual] = company;

  return (
    <div className={style.container}>
      <h3>All Products of {proyectoActual.name}</h3>
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
    </div>
  );
};

export default Products;
