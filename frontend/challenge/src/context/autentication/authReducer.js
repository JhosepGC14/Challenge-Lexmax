import {
  REGISTER_SUCESS,
  REGISTER_ERROR,
  LOGIN_SUCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_USER
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
    case REGISTER_SUCESS:
      localStorage.setItem('sessionId', action.payload.sessionId);
      return {
        ...state,
        authenticated: true,
        mensaje: null
      }
    case GET_USER:
      return {
        ...state,
        username: action.payload
      }
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('sessionId')
      return {
        ...state,
        token: null,
        mensaje: action.payload
      }
    default:
      return state;
  }
}