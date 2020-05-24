import React from "react";
import style from "./Main.module.css";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.gridhome}>
        <div className={style.products}>
          <h2 className={style.h2}>
            THIS IS ALL YOUR PRODUCTS IN OUR MALL ONLINE
          </h2>
          <a href="#!">Send ></a>
        </div>
        <div className={style.companies}>
          <h2 className={style.h2}>
            THIS IS ALL YOUR COMPANIES IN OUR MALL ONLINE
          </h2>
          <a href="#!">Send ></a>
        </div>
        <div className={style.team}>
          <h1 className={style.h1}>EQUIP CHALLENGE FRONT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis sit placeat voluptate animi id maxime cupiditate quo,
            pariatur odio.
          </p>
          <a href="#!">+</a>
        </div>
        <div className={style.start}>
          <a href="#!">START YOUR PROJECT -></a>
        </div>
      </div>
    </main>
  );
};

export default Main;
