import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoutes from "../features/auth/routes";
import HomeRoutes from "../components/routes";
import CompaniesRoutes from "../features/companies/routes"
import ProductRoutes from "../features/products/routes";
import PrivateRoutes from './PrivateRoutes';


const routes = [...HomeRoutes, ...AuthRoutes, ...CompaniesRoutes, ...ProductRoutes];

function MainRoutes() {
  return (
    <Switch>
      {routes.map((route, index) =>
        !route.auth ? <Route {...route} key={index} /> : <PrivateRoutes {...route} key={index} />
      )}
      <Redirect from="/" to="home" exact></Redirect>
      <Route to="*">
        <h1> 404 Page Not Found</h1>
      </Route>
    </Switch>
  );
}

export default MainRoutes;
