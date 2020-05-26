import Login from "../Login";
import Register from "../Register"
import ResetPass from "../ResetPass"
import UpdateProfile from "../UpdateProfile";


const AuthRoutes = [
  {
    path: "/login",
    component: Login,
    auth: false,
  },
  {
    path: "/register",
    component: Register,
    auth: false,
  },
  {
    path: "/resetpassword",
    component: ResetPass,
    auth: false,
  },
  {
    path: "/updateprofile",
    component: UpdateProfile,
    auth: false,
  },
];

export default AuthRoutes;
