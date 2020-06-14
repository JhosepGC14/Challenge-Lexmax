import CreateProduct from '../components/CreateProduct';
// import ProductDetail from '../components/ProductDetail';
import Products from '..';

const ProductRoutes = [
  {
    path: "/products",
    component: Products,
    auth: true,
    exact: true
  },
  {
    path: "/createproduct",
    component: CreateProduct,
    auth: true,
    exact: true
  },
  // {
  //   path: "/productdetail",
  //   component: ProductDetail,
  //   auth: true,
  // }
]

export default ProductRoutes;