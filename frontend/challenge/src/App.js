import React from 'react';
import Header from './components/Header';
import { HashRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import "./App.css"
import MainRoutes from './routes';
import Layout from "../src/components/Layout"

function App() {
  return (
    <Router>
      <Header />
      <Layout>
        <MainRoutes />
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
