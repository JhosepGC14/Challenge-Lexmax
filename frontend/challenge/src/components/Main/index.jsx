import React from "react";
import style from "./Main.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.gridhome}>
        <div className={`${style.products} card`}>
          <h2 className={style.h2}>
            THIS IS ALL YOUR PRODUCTS IN OUR MALL ONLINE
          </h2>
          <Link to="/products">Send</Link>
        </div>
        <div className={`${style.companies} card`}>
          <h2 className={style.h2}>
            THIS IS ALL YOUR COMPANIES IN OUR MALL ONLINE
          </h2>
          <Link to="/companies">Send</Link>
        </div>
        <div className={`${style.team} card`}>
          <h1 className={style.h1}>EQUIP CHALLENGE FRONT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis sit placeat voluptate animi id maxime cupiditate quo,
            pariatur odio.
          </p>
          <a href="#!">+</a>
        </div>
        <div className={style.start}>
          <a href="#!">START YOUR PROJECT &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
