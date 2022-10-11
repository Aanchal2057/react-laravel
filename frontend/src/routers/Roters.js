import { Navigate, Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import ProductList from "../components/ProductList";


const Routers = () => {
   return (
   <Routes>
    <Route path="/" element={<Navigate to='home'/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/products' element={<AllProducts/>}/>
   {/* <Route path='/products' component={ProductList}/> */}
   <Route path='/product/:slug' element={<ProductDetails/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Signup/>}/>
   </Routes>
   );
 };

export default Routers;