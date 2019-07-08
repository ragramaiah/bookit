import React, { Component } from "react";
import { isUndefined } from "util";
 
class CarBooking extends Component {

  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  }

  constructor() {
    super();
    this.state = {
      isLoading: true,
      groups: []
    }
}
async componentDidMount() {
  const response = await fetch('http://localhost:8080/bookit');
  const body = await response.json();
  this.setState({ groups: body, isLoading: false });
    
}
render()
{
  const {groups, isLoading} = this.state;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if(groups==isUndefined){
      groups=[];
  }

    return(
      <div>
        <h3>Welcome to Car booking</h3>
            <table className="tat"> 
              <tr>
                <th>Car Type</th>
                <th>No of Cars available</th>
              </tr>
                {
                  groups.map((group) =>
                  <tr className="trow"> 
                    <td>  {group.name} </td> 
                    <td align="center"> {group.noOfCars} </td>
                  </tr>               ) 
                }
              </table>
      </div>

            )
}
}
 
export default CarBooking;