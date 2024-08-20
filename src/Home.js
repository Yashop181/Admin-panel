// Import the CSS file
import './Home.css';

import React from 'react';
import { FaDollarSign, FaShoppingCart, FaBox } from 'react-icons/fa';
import OrderStatusChart from './OrderStatusChart';

// Box component for each section
const Box = ({ title, value, icon, boxClass }) => (
  <div className={`Box ${boxClass}`}>
    <span>{icon}</span>
    <div>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      <h1>Admin Home</h1>
      
      <div className="BoxContainer">
        <Box title="Earning" value="5000 INR" icon={<FaDollarSign />} boxClass="Box1" />
        <Box title="Products" value="50" icon={<FaShoppingCart />} boxClass="Box2" />
        <Box title="Orders" value="10" icon={<FaBox />} boxClass="Box3" />
      </div>

      <OrderStatusChart/>
    </div>
  );
}

export default Home;
