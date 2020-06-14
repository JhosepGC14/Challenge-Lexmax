import Companies from '..';
import Choosecompany from "../components/ChooseCompany";
import CreateCompany from "../components/CreateCompany";
import UpdateCompany from '../components/UpdateCompany';


const CompaniesRoutes = [
  {
    path: "/companies",
    component: Companies,
    auth: true,
    exact: true,
  },
  {
    path: "/choosecompany",
    component: Choosecompany,
    auth: true,
    exact: true,
  },
  {
    path: "/createcompany",
    component: CreateCompany,
    auth: true,
    exact: true,
  },
  {
    path: "/updatecompany",
    component: UpdateCompany,
    auth: true,
    exact: true,
  },
];

export default CompaniesRoutes;
