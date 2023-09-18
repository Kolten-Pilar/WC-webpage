import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/PaymentSuccess';
import Register from '../pages/Register';

function Navigation() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation;