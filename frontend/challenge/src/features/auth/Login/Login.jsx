import React from "react";
import style from "./Login.module.css";
import image from "../../../assets/images/image1.png";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className="col">
          <figure>
            <img className={style.img} src={image} alt="image_login" />
          </figure>
        </div>
        <div className="col">
          <label>Access to Plataform</label>
          <h1>LOGIN</h1>
          <div class="form-group">
            <label htmlFor="">Email Adress</label>
            <input className="form-control" type="email" placeholder="Email" />
            <label htmlFor="">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
