import React, { useReducer } from 'react';
import authReducer from "../autentication/authReducer";
import authContext from "../autentication/authContext";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth"
import {
  REGISTER_SUCESS,
  REGISTER_ERROR,
  LOGIN_SUCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER
} from "../../types";

const AuthState = props => {
  const initialState = {
    sessionId: localStorage.getItem('sessionId'),
    authenticated: null,
    username: null,
    mensaje: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const registerUser = async datos => {
    try {
      const response = await clienteAxios.post('/auth/signup/', datos);
      console.log('response', response.data);
      dispatch({
        type: REGISTER_SUCESS,
        payload: response.data
      });
      //obtener el usuario autenticado
      userAuthenticated();
    }
    catch (error) {
      console.log(error.response.data.error)
      const alerta = {
        msg: error.response.data.error,
        categoria: 'alert-danger'
      }
      dispatch({
        type: REGISTER_ERROR,
        payload: alerta
      })
    }
  }

  //retornar el usuario auntenticado
  const userAuthenticated = async () => {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      tokenAuth(sessionId);
    }
    try {
      const response = await clienteAxios.get('/users/me/')
      dispatch({
        type: GET_USER,
        payload: response.data
      });
    }
    catch (error) {
      console.log(error.response)
      dispatch({
        type: LOGIN_ERROR,
      });
    };
  };

  //cuando el user inicia sesion
  const loginUser = async datos => {
    try {
      const response = await clienteAxios.post('/auth/login/', datos);
      dispatch({
        type: LOGIN_SUCESS,
        payload: response.data
      });
      //obtenemos el usuario
      userAuthenticated();
    } catch (error) {
      console.log(error.response.data.error)
      const alerta = {
        msg: error.response.data.error,
        categoria: 'alert-danger'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      })
    }
  }

  //LogOut Session
  const logOut = () => {
    dispatch({
      type: LOGOUT,

    })
  }


  return (
    <authContext.Provider
      value={{
        loading: state.loading,
        //registerUser
        sessionId: state.sessionId,
        authenticated: state.authenticated,
        userAuthenticated,
        username: state.username,
        mensaje: state.mensaje,
        registerUser,
        //login
        loginUser,
        logOut
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState;