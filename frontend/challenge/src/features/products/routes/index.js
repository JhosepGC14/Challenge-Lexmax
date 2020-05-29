import CreateProduct from '../components/CreateProduct';
import ProductDetail from '../components/ProductDetail';
import Products from '..';

const ProductRoutes = [
  {
    path: "/products",
    component: Products,
    auth: false,
  },
  {
    path: "/createproduct",
    component: CreateProduct,
    auth: false,
  },
  {
    path: "/productdetail",
    component: ProductDetail,
    auth: false,
  }
]

export default ProductRoutes;