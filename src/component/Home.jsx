import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
import pic from "../images/img1.svg";
import Common from './Common';

const Home = () => {
  return (
    <>

    <Common 
    name="Green Clean With" 
    imgsrc={pic} 
    go="/service" 
    btname="Get Started"/>

    </>

    
  );
}

export default Home;
