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
        mensaje: null,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        username: action.payload,
        loading: false
      }
    case LOGOUT:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('sessionId')
      return {
        ...state,
        token: null,
        username: null,
        authenticated: null,
        mensaje: action.payload,
        loading: false
      }
    default:
      return state;
  }
}