import React, { useState, useContext, useEffect } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autentication/authContext";

const Login = (props) => {
  //extraemos los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alert, showAlert } = alertaContext;

  const authContext = useContext(AuthContext);
  const { loginUser, mensaje, authenticated } = authContext;

  //en caso de que el passwrod o usuario no exista
  useEffect(() => {
    if (authenticated) {
      props.history.push("/companies");
    }

    if (mensaje) {
      showAlert(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, authenticated, props.history]);

  //state para iniciar sesion
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  //extraer el usuario
  const { email, password } = user;

  const iniciarSesion = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario quiere iniciar sesion

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios", "alert-danger");
      return;
    }

    //Pasar al action (reduce)
    loginUser({
      email,
      password,
    });
  };

  return (
    <div className={style.container}>
      {alert ? (
        <div className={`text-center alert ${alert.categoria}`}>
          {alert.msg}
        </div>
      ) : null}
      <div className={style.row}>
        <form onSubmit={onSubmit} className={`col ${style.formContainer}`}>
          <label className="text-center">Access to Plataform</label>
          <h1 className="text-center">LOGIN</h1>
          <div className="form-group">
            <label htmlFor="email">Email Adress</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={iniciarSesion}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={iniciarSesion}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Ingresar
          </button>
          <Link to="/register" className="text-center">
            Obtener Cuenta
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
