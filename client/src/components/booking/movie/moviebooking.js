import React, { Component } from "react";
import { isUndefined } from "util";
 
class MovieBooking extends Component {

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
        <h3>Welcome to Movie booking</h3>
            
      </div>

            )
}
}
 
export default MovieBooking;