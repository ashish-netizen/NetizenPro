import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from "./component/Navbar";


function App() {
  return (
    <>
    <Navbar />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/service' component={Service} />
    <Redirect to='/' />   
  </Switch>
 

   
</>
  );
}

export default App;
