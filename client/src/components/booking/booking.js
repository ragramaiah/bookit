import React, { Component } from "react";
 
import { IoIosAirplane } from "react-icons/io";
import { IoIosCar } from "react-icons/io";
import { IoIosFilm } from "react-icons/io";
// import { GoPerson } from "react-icons/go";
import { IoIosTrain } from "react-icons/io";
import './booking.css';
import { Route } from 'react-router-dom';
import Alert from '../alert/Alert';
class Booking extends Component {

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
        <h3 align="center" className="header-3">Choose your needs</h3>
        <Alert
        onConfirm={()=>this.navigate()}
          onConfirmOrDismiss={() => this.setState({ showDeclarative: false })}
          show={this.state.showDeclarative}
          showCancelButton={true}
          text={'You want to book?'}
          title={'Are you sure?'}
          type={'question'}
        />
        <table align="center">
        <tbody>
            <th>
              <IoIosAirplane 
                className="Flight"
                size={100} 
                onClick={()=>{alert('Flight booked')}} 
                style={{cursor: 'pointer'}}/>
            </th>
            <th>
              <IoIosTrain 
                className="Train"
                size={100} 
                style={{cursor: 'pointer'}}
                onClick={()=>{alert("Train booked")}} 
                />
            </th>
            <th>
            <Route  render={({ history}) => (
              <IoIosCar 
                className="Car"
                style={{cursor: 'pointer'}}
                size={100} 
                onClick={()=>{this.declarativeAlert('/carbooking')}} 
                />)}/>
            </th>
            <th>
            <Route  render={({ history}) => (
              <IoIosFilm 
              className="Movie"
              style={{cursor: 'pointer'}}
              size={100} 
              onClick={()=>{this.declarativeAlert('/moviebooking')}} 
              />)}/>
            </th>
            
            </tbody>
            <tr>
              <td align = "center"><h2 className="header-2-flight">Flights</h2></td>
              <td align = "center"><h2 className="header-2-train">Train</h2></td>
              <td align = "center"><h2 className="header-2-car">Car</h2></td>
              <td align = "center"><h2 className="header-2-movie">Movie</h2></td>
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
export default Booking;