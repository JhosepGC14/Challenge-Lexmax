import {
  PRODUCTS_COMPANY,
  ADD_PRODUCTS,
  VALIDATE_PRODUCTS,
  DELETE_PRODUCTS,
  GET_CURRENT_PRODUCTS,
  ACTUALIZAR_PRODUCTO
} from "../../types"


export default (state, action) => {
  switch (action.type) {
    case PRODUCTS_COMPANY:
      return {
        ...state,
        productsCompany:action.payload
      }
    case ADD_PRODUCTS:
      return {
        ...state,
        productsCompany: [...state.productsCompany, action.payload],
        errorProduct: false
      }
    case VALIDATE_PRODUCTS:
      return {
        ...state,
        errorProduct: true
      }
    case DELETE_PRODUCTS:
      return {
        ...state,
        productsCompany: state.productsCompany.filter(product => product.id !== action.payload)
      }

    case GET_CURRENT_PRODUCTS:
      return {
        ...state,
        productEdit: action.payload
      }
    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productsCompany: state.productsCompany.map(products => products.id === action.payload.id ? action.payload : products),
        productEdit: null
      }
    default:
      return state;
  }
}