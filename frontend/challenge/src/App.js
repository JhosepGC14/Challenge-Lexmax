import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import "./App.css"
import MainRoutes from './routes';
import Layout from "../src/components/Layout";
import CompanyState from "./context/company/CompanyState"
import ProductState from "./context/products/ProductState"

function App() {
  return (
    <CompanyState>
      <ProductState>
        <Router>
          <Header />
          <Layout>
            <MainRoutes />
          </Layout>
          <Footer />
        </Router>
      </ProductState>
    </CompanyState>
  );
}

export default App;
