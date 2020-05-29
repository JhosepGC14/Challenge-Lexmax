import {
  PRODUCTS_COMPANY,
  ADD_PRODUCTS,
  VALIDATE_PRODUCTS,
  DELETE_PRODUCTS,
  GET_CURRENT_PRODUCTS,
  UPDATE_PRODUCTS
} from "../../types"


export default (state, action) => {
  switch (action.type) {
    case PRODUCTS_COMPANY:
      return {
        ...state,
        productsCompany: state.products.filter(products => products.companyId === action.payload)
      }
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
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
        products: state.products.filter(product => product.id !== action.payload)
      }

    case GET_CURRENT_PRODUCTS:
      return {
        ...state,
        productEdit: action.payload
      }
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(products => products.id === action.payload.id ? action.payload : products)
      }
    default:
      return state;
  }
}