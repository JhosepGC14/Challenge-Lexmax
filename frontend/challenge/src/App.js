import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import "./App.css"
import MainRoutes from './routes';
import Layout from "../src/components/Layout";
import CompanyState from "./context/company/CompanyState"

function App() {
  return (
    <CompanyState>
      <Router>
        <Header />
        <Layout>
          <MainRoutes />
        </Layout>
        <Footer />
      </Router>
    </CompanyState>
  );
}

export default App;
