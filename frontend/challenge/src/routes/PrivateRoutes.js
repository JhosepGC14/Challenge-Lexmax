import React, { useContext } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import AuthContext from "../context/autentication/authContext"

function PrivateRoutes(props) {
  // const autenticado = useSelector(state => state.authReducer.authenticated);
  const authContext = useContext(AuthContext);
  const { authenticated, loading } = authContext;

  return (
    <>
      {authenticated && !loading ?
        (
          <Route {...props} />
        ) :
        (
          <Redirect to={{
            pathname: '/login'
          }} />
        )
      }
    </>
  )
}

export default PrivateRoutes;