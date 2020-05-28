import React from "react";
import Companies from "../../features/companies/components/ListCompanies";
import style from "./Aside.module.css";

const Sidebar = () => {
  return (
    <aside className={style.asideStyle}>
      <Companies />
    </aside>
  );
};

export default Sidebar;
