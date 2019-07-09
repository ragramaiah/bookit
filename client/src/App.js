import React, { Component} from 'react';
import './App.css';
import {
  NavLink
} from "react-router-dom";
//import { Redirect } from 'react-router';

class App extends Component {

  

  render() {
   
    return (
      
        <div>
          <h1>Simple Booking</h1>
         
          <ul className="header">
            <li><NavLink to="/appointments">Appointments</NavLink></li>
            <li><NavLink to="/booking">Booking</NavLink></li>
          </ul>
          
          </div>
         
      
    );
  }
}
export default App;
