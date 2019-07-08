import React, { Component } from "react";
 
import { IoIosAirplane } from "react-icons/io";
import { IoIosCar } from "react-icons/io";
import { IoIosFilm } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoIosTrain } from "react-icons/io";
import './appointment.css';
import { Route } from 'react-router-dom';
import Alert from '../alert/Alert';
class Appointments extends Component {

  constructor() {
    super();
    this.state = {
      interpretedAlert: null,
      showDeclarative: false,
      navigablePage: ""
    };
  }
  
  declarativeAlert(type) {
    this.setState({ showDeclarative: true });
    this.setState({ navigablePage: type });
  }

  navigate(){
  this.props.history.push(this.state.navigablePage);
}
  render() {
    return (
      <div>
        <h3 align="center">Book Appointment with:</h3>
        <table align="center">
        <tbody>
            <th>
              <GoPerson 
                className="Doctor"
                style={{cursor: 'pointer'}}
                size={100} 
                onClick={()=>{alert("Doctor booked")}} 
                />
            </th>
            </tbody>
            <tr>
              <td align = "center"><h2 className="header-2-doctor">Doctor</h2></td>
              
            </tr>
            </table>
      </div>
    );
  }
}
 
// function navigate(history){
//   alert('Are you sure you want to book Car?')
//   declarativeAlert();
//   history.push('/carbooking');
// }
export default Appointments;