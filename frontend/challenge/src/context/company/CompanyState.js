import React, { useReducer } from 'react';
import CompanyContext from "./CompanyContext";
import CompanyReducer from "./CompanyReducer";
import clienteAxios from "../../config/axios"
import {
  VIEW_USERNAME,
  GET_COMPANIES,
  ADD_COMPANY,
  VALIDATE_FORM,
  GET_CURRENT_PROJECT,
  LEAVE_COMPANY,
  COMPANY_ERROR
} from "../../types";



const CompanyState = props => {
  const initialState = {
    companies: [],
    viewUsername: false,
    errorForm: false,
    company: null,
    mensaje: null,
    alreadyCreate: false,
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
  const getCompanies = async () => {
    try {
      const response = await clienteAxios.get('/companies/');
      dispatch({
        type: GET_COMPANIES,
        payload: response.data
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alert-danger'
      }
      dispatch({
        type: COMPANY_ERROR,
        payload: alerta
      })
    }
  }

  //AGREGAR NUEVA COMPAÑIA
  const addCompanies = async companies => {
    try {
      const response = await clienteAxios.post("/companies/create_join/", companies);
      console.log(response)
      //Insertamos el proyecto en el state
      dispatch({
        type: ADD_COMPANY,
        payload: response.data,
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alert-danger'
      }
      dispatch({
        type: COMPANY_ERROR,
        payload: alerta
      })
    }
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

  //ELIMA O DEJA UN PROYECTO
  const eliminarCompany = async companyId => {
    try {
      await clienteAxios.post('/companies/leave')
      dispatch({
        type: LEAVE_COMPANY,
        payload: companyId
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alert-danger'
      }
      dispatch({
        type: COMPANY_ERROR,
        payload: alerta
      })
    }
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
        proyectoActual,
        //leave company
        eliminarCompany,
        mensaje: state.mensaje,
        alreadyCreate: state.alreadyCreate
      }}
    >
      {props.children}
    </CompanyContext.Provider>
  )
}

export default CompanyState;