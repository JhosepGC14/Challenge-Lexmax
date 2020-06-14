import React, { useReducer } from 'react';
import ProductContext from "./ProductContex";
import ProductReducer from "./ProductReducer";
import clienteAxios from "../../config/axios";
import {
  PRODUCTS_COMPANY,
  ADD_PRODUCTS,
  VALIDATE_PRODUCTS,
  DELETE_PRODUCTS,
  GET_CURRENT_PRODUCTS,
  ACTUALIZAR_PRODUCTO
} from "../../types"

const ProductState = props => {
  const initialState = {
    productsCompany: [],
    errorProduct: false,
    productEdit: null
  }


  //el dispatch y state
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  //obtener productos por compañias
  const getProducts = async company => {
    try {
      const response = await clienteAxios.get('/products/', { params: { company } });
      dispatch({
        type: PRODUCTS_COMPANY,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Agregar productos
  const addProducts = async products => {

    try {
      await clienteAxios.post('/products/', products);
      dispatch({
        type: ADD_PRODUCTS,
        payload: products
      })
    } catch (error) {
      console.log(error)
    }

  }

  //validar form de creacion de product
  const validateProducts = () => {
    dispatch({
      type: VALIDATE_PRODUCTS
    })
  }

  //ELIMINAR PRODUCTO
  const deleteProduct = async (id, company) => {
    try {
      await clienteAxios.delete(`/products/${id}`, { params: { company } });
      dispatch({
        type: DELETE_PRODUCTS,
        payload: id
      })
    } catch (error) {
      console.log(error);
    }
  }

  //EXTRAER PRODUCTO A EDITAR
  const editProduct = products => {
    dispatch({
      type: GET_CURRENT_PRODUCTS,
      payload: products
    })
  }

  //EDITA O MODIFICA EL PRODUCTO
  const actualizarProducto = async products => {
    try {
      const response = await clienteAxios.put(`/products/${products.id}`, products)

      dispatch({
        type: ACTUALIZAR_PRODUCTO,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductContext.Provider
      value={{
        //traer productos por id de compañia
        getProducts,
        productsCompany: state.productsCompany,
        //agregar productos por ID
        addProducts,
        //validar creacion de products
        errorProduct: state.errorProduct,
        validateProducts,
        //eliminar producto
        deleteProduct,
        //editar producto
        productEdit: state.productEdit,
        editProduct,
        actualizarProducto
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState;