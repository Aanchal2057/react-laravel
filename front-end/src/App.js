import './App.css';
import { Route, Routes,Navigate } from "react-router-dom";
import Home from './routes/home.page/home';
import HeaderFooter from './routes/headerFooter/headerFooter';
import { useEffect } from 'react';
import { setCurrentProduct, setProductError } from './store/products/products-action';
import { useDispatch } from 'react-redux';
import Allproducts from './routes/all-products.page/all-products';
import CartPage from './routes/cart.page/cart.page';
import CheckoutPage from './routes/checkout/CheckoutPage';
import Auth from './routes/auth.page/Auth';
import AuthLogin from './routes/auth.page/AuthLogin';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/data")
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(setCurrentProduct(result));
        },
        (error) => {
          dispatch(setProductError(error));
        }
      )
  }, [dispatch])

  return (
    <>
 
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
           <Route path="/" element={<Navigate to='home'/>}/>
          <Route path="/home" index element={<Home />} />
          <Route path="products/*" element={<Allproducts />} />
          <Route path="register" element={<Auth/>} />
          <Route path="login" element={<AuthLogin/>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
      

    </>
  );
}

export default App;
