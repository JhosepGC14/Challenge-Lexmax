import React, { useReducer } from 'react';
import CompanyContext from "./CompanyContext";
import CompanyReducer from "./CompanyReducer";
import {
  VIEW_USERNAME,
  GET_COMPANIES,
  ADD_COMPANY,
  VALIDATE_FORM,
  GET_CURRENT_PROJECT
} from "../../types";
import { v4 as uuidv4 } from 'uuid';


const CompanyState = props => {
  const companies = [
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
    }
  ];
  const initialState = {
    companies: [],
    viewUsername: false,
    errorForm: false,
    company: null,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(CompanyReducer, initialState)

  //SERIE DE FUNCIONES PARA CRUD
  //muestra el username en el navbar
  const mostrarUsername = () => {
    dispatch({
      type: VIEW_USERNAME
    })
  }

  //traer las compañias desde la BD
  const getCompanies = () => {
    dispatch({
      type: GET_COMPANIES,
      payload: companies
    })
  }

  //AGREGAR NUEVA COMPAÑIA
  const addCompanies = companies => {
    companies.id = uuidv4();

    //Insertamos el proyecto en el state
    dispatch({
      type: ADD_COMPANY,
      payload: companies
    })
  }

  //VALIDAR FORM POR ERRORES
  const validateForm = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  //SELECIONA EL PROYECTO QUE EL USUARIO DIO CLICK
  const proyectoActual = companyId => {
    dispatch({
      type: GET_CURRENT_PROJECT,
      payload: companyId
    })
  }

  return (
    <CompanyContext.Provider
      value={{
        //mostar nombre de usuario en header
        viewUsername: state.viewUsername,
        mostrarUsername,
        //companies -GET
        companies: state.companies,
        getCompanies,
        //companies - POST
        addCompanies,
        //validar Form
        errorForm: state.errorForm,
        validateForm,
        //project current
        company: state.company,
        proyectoActual
      }}
    >
      {props.children}
    </CompanyContext.Provider>
  )
}

export default CompanyState;