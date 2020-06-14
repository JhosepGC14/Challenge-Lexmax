import Main from "../Main";


const HomeRoutes = [
  {
    path: "/home",
    component: Main,
    auth: true,
    exact: true,
  },
];

export default HomeRoutes;
