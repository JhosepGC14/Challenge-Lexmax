import React from "react";
import style from "./ResetPass.module.css";
import image from "../../../assets/images/image1.png";

const ResetPass = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className="col">
          <figure>
            <img className={style.img} src={image} alt="image_login" />
          </figure>
        </div>
        <div className="col">
          <h1>Change Password</h1>
          <div class="form-group">
            <label htmlFor="">OLD PASSWORD:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Old Password"
            />
            <label htmlFor="">NEW PASSWORD:</label>
            <input
              className="form-control"
              type="password"
              placeholder="New Password"
            />
            <label htmlFor="">PASSWORD CONFIRMATION:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password Confirmation"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            CHANGE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
