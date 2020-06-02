import clienteAxios from "./axios";

const tokenAuth = sessionId => {
  if (sessionId) {
    clienteAxios.defaults.headers.common['Authorization'] = sessionId
  }
  else {
    delete clienteAxios.defaults.headers.common['Authorization'];
  }
}

export default tokenAuth;