import React, { useContext } from "react";
import style from "./CardProduct.module.css";
// import { Link } from "react-router-dom";
import CompanyContext from "../../../../context/company/CompanyContext";
import ProductContext from "../../../../context/products/ProductContex";

const CardProduct = ({ products }) => {
  // Extrar companias de state inicial
  const proyectosContext = useContext(CompanyContext);
  const { company } = proyectosContext;

  // Extrar productos de state inicial
  const productsContext = useContext(ProductContext);
  const { deleteProduct, getProducts, editProduct } = productsContext;

  //aplicando destructuring en compañia
  const [proyectoActual] = company;

  //funcion que ejecuta cuando el user presiona boton de eliminar producto
  const productEliminar = (id) => {
    deleteProduct(id, proyectoActual.id);
    getProducts(proyectoActual.id);
  };

  // editar producto
  const editHandle = (products) => {
    editProduct(products);
  };

  return (
    <div className={style.cardProduct}>
      <div className={style.desc}>
        <span>{products.discount}%</span>
      </div>
      <p>{products.name}</p>
      <span>${products.price}</span>
      {/* <Link to="/productdetail">
        <button className="btn btn-primary mb-2">View Details</button>
      </Link> */}
      <button
        className="btn btn-primary mb-2"
        type="button"
        onClick={() => editHandle(products)}
      >
        Editar
      </button>
      <button
        className="btn btn-primary mb-2"
        type="button"
        onClick={() => productEliminar(products.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CardProduct;
