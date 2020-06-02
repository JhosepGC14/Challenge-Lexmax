import React, { useReducer } from 'react';
import alertaReducer from "../alertas/aletraReducer";
import alertaContext from "../alertas/alertaContext";
import { SHOW_ALERT, HIDE_ALERT } from "../../types";

const AlertaState = props => {
  const initialState = {
    alert: null,
  }

  const [state, dispatch] = useReducer(alertaReducer, initialState)

  //funciones
  const showAlert = (msg, categoria) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg, categoria
      }
    });
    //despues de 5 segundos limpiamos el mnesajede error
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      })
    }, 5000);
  }

  return (
    <alertaContext.Provider
      value={{
        //alertas
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </alertaContext.Provider>
  )
}

export default AlertaState;