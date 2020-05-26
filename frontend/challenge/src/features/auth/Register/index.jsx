import React, { useState } from "react";
import style from "./Register.module.css";
import image from "../../../assets/images/image1.png";
import { Link } from "react-router-dom";

const Register = () => {
  //state para registrar
  const [register, saveRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //extraer el usuario
  const { username, email, password, confirmPassword } = register;

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


    //Password minimo de 6 caracteres


    //validar si ambos password son iguales

    

    //Pasar al action (reduce)
  };

  return (
    <div className={style.container}>
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
            <label htmlFor="username">Name Complete:</label>
            <input
              className="form-control"
              id="username"
              type="text"
              placeholder="Name Complete"
              name="username"
              value={username}
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
              value={confirmPassword}
              name="confirmPassword"
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
