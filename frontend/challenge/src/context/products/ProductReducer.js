import {
  PRODUCTS_COMPANY,
  ADD_PRODUCTS
} from "../../types"


export default (state, action) => {
  switch (action.type) {
    case PRODUCTS_COMPANY:
      return {
        ...state,
        productsCompany: state.products.filter(products => products.companyId === action.payload)
      }
    case ADD_PRODUCTS:
      return{
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state;
  }
}