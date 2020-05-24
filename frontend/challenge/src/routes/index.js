import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoutes from "../features/auth/Login/routes";
import Main from "../components/Main";
import HomeRoutes from "../components/routes";


const routes = [...HomeRoutes, ...AuthRoutes];

function MainRoutes() {
  return (
    <Switch>
      {routes.map((route, index) =>
        !route.auth ? <Route {...route} key={index} /> : "NADA"
      )}
      <Redirect from="/" to="login" exact></Redirect>
      <Route to="*">
        <h1>No se encontro la ruta!!</h1>
      </Route>
    </Switch>
  );
}

export default MainRoutes;
