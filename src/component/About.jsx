import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
import pic from "../images/undraw_eco_conscious_1y58.svg";
import Common from './Common';
const About = () => {
  return (
    <>
<Common 

name=" Welcome to About Page" 
imgsrc={pic} 
go="/contact" 
btname="Contact Us"
/>

    </>
  );
}

export default About;
