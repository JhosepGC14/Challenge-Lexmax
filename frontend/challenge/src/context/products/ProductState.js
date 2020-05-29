import React, { useReducer } from 'react';
import ProductContext from "./ProductContex";
import ProductReducer from "./ProductReducer";
import {
  PRODUCTS_COMPANY,
  ADD_PRODUCTS,
  VALIDATE_PRODUCTS,
  DELETE_PRODUCTS,
  GET_CURRENT_PRODUCTS,
  UPDATE_PRODUCTS
} from "../../types"

const ProductState = props => {
  const initialState = {
    products: [
      {
        id: 1,
        companyId: 1,
        name: "Agua de Mesa San Luis",
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
        companyId: 3,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 4,
        companyId: 3,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 5,
        companyId: 5,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 6,
        companyId: 6,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 7,
        companyId: 7,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 8,
        companyId: 8,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 9,
        companyId: 9,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10,
      },
      {
        id: 11,
        companyId: 1,
        name: "product 1",
        sku: "DP18-Bk-T",
        price: 100,
        discount: 10
      },
      {
        id: 12,
        companyId: 1,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10
      }
    ],
    productsCompany: null,
    errorProduct: false,
    productEdit: null
  }


  //el dispatch y state
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  //obtener productos por compañias
  const getProducts = companyId => {
    dispatch({
      type: PRODUCTS_COMPANY,
      payload: companyId
    })
  }

  //Agregar productos
  const addProducts = products => {
    dispatch({
      type: ADD_PRODUCTS,
      payload: products
    })
  }

  //validar form de creacion de product
  const validateProducts = () => {
    dispatch({
      type: VALIDATE_PRODUCTS
    })
  }

  //ELIMINAR PRODUCTO
  const deleteProduct = id => {
    dispatch({
      type: DELETE_PRODUCTS,
      payload: id
    })
  }

  //EXTRAER PRODUCTO A EDITAR
  const editProduct = products => {
    dispatch({
      type: GET_CURRENT_PRODUCTS,
      payload: products
    })
  }

  //EDITA O MODIFICA EL PRODUCTO
  const updateProduct = products => {
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: products
    })
  }

  return (
    <ProductContext.Provider
      value={{
        //traer productos por id de compañia
        products: state.products,
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
        updateProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState;