import "./App.css";
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Search/Search.jsx";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import Profile from "./component/User/Profile.jsx";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
import Payment from "./component/Cart/Payment.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./component/Cart/Success.jsx";
import Orders from "./component/Order/Orders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductsList from "./component/Admin/ProductsList.jsx";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.jsx";
import OrderList from "./component/Admin/OrderList.jsx";
import ProcessOrder from "./component/Admin/ProcessOrder.jsx";
import UsersList from "./component/Admin/UsersList.jsx";
import UpdateUser from "./component/Admin/UpdateUser.jsx";
import About from "./component/Home/About.jsx";
import Contact from "./component/Home/Contact.jsx";
import NotFound from "./component/layout/NotFound/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "http://localhost:4000/api/v1/stripeapikey"
    );

    console.log(data);
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());
  
  return (
    <BrowserRouter>
      <Header />
      {user && isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/login" element={<LoginSignUp />} />
        {user && isAuthenticated && (
          <Route exact path="/account" element={<Profile />} />
        )}
        {user && isAuthenticated && (
          <Route exact path="/me/update" element={<UpdateProfile />} />
        )}
        {user && isAuthenticated && (
          <Route exact path="/password/update" element={<UpdatePassword />} />
        )}
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" exact element={<Cart />} />
        {user && isAuthenticated && (
          <Route exact path="/shipping" element={<Shipping />} />
        )}
        {user && isAuthenticated && (
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        )}

        {user && isAuthenticated && stripeApiKey && (
          <Route
            exact
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )}

        {user && isAuthenticated && (
          <Route exact path="/success" element={<Success />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/orders" element={<Orders />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/order/:id" element={<OrderDetails />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/products" element={<ProductsList />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/product" element={<NewProduct />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/orders/" element={<OrderList />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/users" element={<UsersList />} />
        )}

        {user && isAuthenticated && (
          <Route exact path="/admin/user/:id" element={<UpdateUser />} />
        )}

        <Route  path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
