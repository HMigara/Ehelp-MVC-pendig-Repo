import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import WishList from './Pages/WishList';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Singup from './Pages/Singup';
import ResetPassword from './Pages/ResetPassword';
import SingalBlog from './Pages/SingalBlog';
import RefundPolice from './Pages/RefundPolice';
import ShippingPolice from './Pages/ShippingPolice';
import TermAndCondition from './Pages/TermAndCondition';
import PrivercyPolice from './Pages/PrivercyPolice';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingalBlog />} />
            <Route path="compareProduct" element={<CompareProduct />} />
            <Route path="Wishlist" element={<WishList />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="singup" element={<Singup />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="privercy-Police" element={<PrivercyPolice />} />
            <Route path="Term-Condition" element={<TermAndCondition />} />
            <Route path="Shipping-Police" element={<ShippingPolice />} />
            <Route path="Refund-Police" element={<RefundPolice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
