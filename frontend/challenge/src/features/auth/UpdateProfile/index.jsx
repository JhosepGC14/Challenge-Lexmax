import React from "react";
import style from "../UpdateProfile/UpdateProfile.module.css";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div className={style.container}>
      <div className={`col ${style.colContainer}`}>
        <label>Change Information</label>
        <h1>UPDATE PROFILE</h1>
        <div class={` form-group ${style.form_group}`}>
          <label htmlFor="">NAME:</label>
          <input className="form-control" type="text" placeholder="Nombre" />
          <label htmlFor="">EMAIL:</label>
          <input className="form-control" type="Email" placeholder="Email" />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          UPDATE NOW
        </button>
        <Link to="/resetpassword">Change Password ></Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
