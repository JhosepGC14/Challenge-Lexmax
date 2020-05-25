import Companies from '..';
import Choosecompany from "../components/ChooseCompany";
import CreateCompany from "../components/CreateCompany";
import UpdateCompany from '../components/UpdateCompany';


const CompaniesRoutes = [
  {
    path: "/companies",
    component: Companies,
    auth: false,
    exact: true,
  },
  {
    path: "/choosecompany",
    component: Choosecompany,
    auth: false,
    exact: true,
  },
  {
    path: "/createcompany",
    component: CreateCompany,
    auth: false,
    exact: true,
  },
  {
    path: "/updatecompany",
    component: UpdateCompany,
    auth: false,
    exact: true,
  },
];

export default CompaniesRoutes;
