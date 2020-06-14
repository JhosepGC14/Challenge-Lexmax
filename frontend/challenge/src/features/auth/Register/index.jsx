import React, { useState, useContext, useEffect } from "react";
import style from "./Register.module.css";
import image from "../../../assets/images/image1.png";
import { Link } from "react-router-dom";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autentication/authContext";

const Register = (props) => {
  //extraemos los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alert, showAlert } = alertaContext;

  const authContext = useContext(AuthContext);
  const { registerUser, mensaje, authenticated } = authContext;

  //en caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
  useEffect(() => {
    if (authenticated) {
      props.history.push("/companies");
    }

    if (mensaje) {
      showAlert(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, authenticated, props.history]);

  //state para registrar
  const [register, saveRegister] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  //extraer el usuario
  const { name, email, password, passwordConfirmation } = register;

  //definimos el onChange
  const registrarme = (e) => {
    saveRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario desee registrarse
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      passwordConfirmation.trim() === ""
    ) {
      showAlert("Todos los campos son obligatorios", "alert-danger");
      return;
    }

    //Password minimo de 6 caracteres
    if (password.length < 6) {
      showAlert(
        "El password debe ser de al menos 6 caracteres",
        "alert-danger"
      );
      return;
    }

    //validar si ambos password son iguales
    if (password !== passwordConfirmation) {
      showAlert("Las Contraseñas deben ser iguales", "alert-danger");
      return;
    }

    //Pasar al action (reduce)
    registerUser({
      name,
      email,
      password,
      passwordConfirmation,
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
        <div className="col">
          <figure>
            <img className={style.img} src={image} alt="image_login" />
          </figure>
        </div>
        <form className={`col ${style.formContainer}`} onSubmit={onSubmit}>
          <label>Access to Plataform</label>
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="name">Name Complete:</label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name Complete"
              name="name"
              value={name}
              onChange={registrarme}
            />
            <label htmlFor="email">Email Adress:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={registrarme}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={registrarme}
            />
            <label htmlFor="confirmPass">Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              id="confirmPass"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              name="passwordConfirmation"
              onChange={registrarme}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3"
            value="Registrarme"
          >
            Registrar
          </button>
          <Link to="/login">Iniciar Sesion</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
