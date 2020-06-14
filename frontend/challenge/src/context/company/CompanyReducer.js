import {
  VIEW_USERNAME,
  GET_COMPANIES,
  ADD_COMPANY,
  VALIDATE_FORM,
  GET_CURRENT_PROJECT,
  LEAVE_COMPANY,
  COMPANY_ERROR
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case VIEW_USERNAME:
      return {
        ...state,
        viewUsername: true
      }
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload
      }
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
        errorForm: false,
        alreadyCreate: true
      }
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true
      }
    case GET_CURRENT_PROJECT:
      return {
        ...state,
        company: state.companies.filter(company => company.id === action.payload)
      }
    case LEAVE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(company => company.id !== action.payload),
        company: null
      }
    case COMPANY_ERROR:
      return{
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
}
