import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import "./App.css"
import MainRoutes from './routes';
import Layout from "../src/components/Layout";
import CompanyState from "./context/company/CompanyState"
import ProductState from "./context/products/ProductState"
import AlertaState from "./context/alertas/alertaState"
import AuthState from "./context/autentication/authState"
import tokenAuth from './config/tokenAuth';

//Revisamos si tenemos token
const sessionId = localStorage.getItem('sessionId');
if (sessionId) {
  tokenAuth(sessionId);
}

function App() {
  return (
    <CompanyState>
      <ProductState>
        <AlertaState>
          <AuthState>
            <Router>
              <Header />
              <Layout>
                <MainRoutes />
              </Layout>
              <Footer />
            </Router>
          </AuthState>
        </AlertaState>
      </ProductState>
    </CompanyState>
  );
}

export default App;
