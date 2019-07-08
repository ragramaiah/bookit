import React, { Component,PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";
import Appointments from "./components/appointments/appointments";
import Carbooking from "./components/booking/car/carbooking";
import Moviebooking from "./components/booking/movie/moviebooking";
import Booking from "./components/booking/booking";
import { Redirect } from 'react-router';

class App extends Component {

  

  render() {
   
    return (
      <HashRouter>
        <div>
          <h1>Simple Booking</h1>
          {/* <Redirect to="/appointments" /> */}
          <ul className="header">
            <li><NavLink to="/appointments">Appointments</NavLink></li>
            <li><NavLink to="/booking">Booking</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/appointments" component={Appointments}/>
          <Route path="/booking" component={Booking}/>
            <Route path="/carbooking" component={Carbooking}/>
            <Route path="/moviebooking" component={Moviebooking}/>
          </div>
          </div>
          {/* <div>
          <Copyright>Brillio</Copyright></div> */}
          
      </HashRouter>
      
    );
  }
}
export default App;
