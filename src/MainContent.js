import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'; // Update the path accordingly
import AllProducts from './AllProducts'; // Update the path accordingly
import AddProduct from './AddProduct'; // Update the path accordingly
import Orders from './Orders';
import Coupon from './Coupon';
import Categories from './Categories';
import Brands from './Brands';
import OrderDetails from './OrderDetails';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path='/add-orders' element={<Orders/>} />
        <Route path='/add-coupon' element={<Coupon/>} />
        <Route path='/add-categories' element={<Categories/>} />
        <Route path='/add-brands' element={<Brands/>} />
        <Route path='/order-details' element={<OrderDetails/>} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default MainContent;
