import React, { useContext } from "react";
import CardProduct from "../products/components/CardProduct";
import CreateProduct from "../products/components/CreateProduct";
import style from "./Product.module.css";
import CompanyContext from "../../context/company/CompanyContext";
import ProductContext from "../../context/products/ProductContex";

const Products = () => {
  // Extrar companias de state inicial
  const proyectosContext = useContext(CompanyContext);
  const { company, eliminarCompany } = proyectosContext;

  // Extrar productos de state inicial
  const productsContext = useContext(ProductContext);
  const { productsCompany } = productsContext;

  if (!company)
    return (
      <h2 className="text-center mt-5">
        Seleccione una Empresa para ver sus Productos
      </h2>
    );

  //array destructuring para extraer la compañia actual
  const [proyectoActual] = company;

  //eliminar compañia
  const onClickEliminar = () => {
    eliminarCompany(proyectoActual.id);
  };

  return (
    <div className={style.container}>
      <h3>All Products of {proyectoActual.name}</h3>
      <div className={style.leave}>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          className="btn btn-primary mb-5"
        >
          Leave Company ->
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className={`modal-title ${style.h5}`} id="exampleModalLabel">
                Leave Company
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className={style.h5}>¿Do you want to leave this Company?</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={onClickEliminar}
              >
                Si, Dejar Empresa
              </button>
            </div>
          </div>
        </div>
      </div>
      <CreateProduct />
      <div className={style.gridProduct}>
        {productsCompany.length === 0 ? (
          <div className={style.containerForm}>
            <h2 className="text-center">No hay Productos en la Empresa</h2>
          </div>
        ) : (
          productsCompany.map((products) => (
            <CardProduct key={products.id} products={products} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
