import React from "react";
import style from "./CardCompanies.module.css";
import { Link } from "react-router-dom";

const CardCompanies = () => {
  return (
    <div className={style.grid}>
      <div className={style.cardcompany}>
        <h2>Chemifabri SAC</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ipsum et vero harum expedita animi praesentium voluptatem accusamus,
          cumque cupiditate.
        </p>
        <Link to="/updatecompany">Edit Company+</Link>
      </div>
      <div className={style.leave}>
        <a href="#!" data-toggle="modal" data-target="#exampleModal">
          Leave Company ->
        </a>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className={`modal-title ${style.h5}`} id="exampleModalLabel">
                Leave Company
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className={style.h5}>Your Left Chemifrabik</h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCompanies;
