import React from "react";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return <main className={style.layout}>{children}</main>;
};

export default Layout;
