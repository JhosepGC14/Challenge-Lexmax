import React from 'react';
import Header from './components/Header';
import { HashRouter as Router } from "react-router-dom";
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './features/auth/Login/Login';
import "./App.css"
import MainRoutes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
