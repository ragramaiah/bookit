import React from "react";

import LogIn from "./LogIn";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import App from "./App";
import RegisterPage from "./RegisterPage";
import Appointments from "./components/appointments/appointments";
import Carbooking from "./components/booking/car/carbooking";
import Moviebooking from "./components/booking/movie/moviebooking";
import Booking from "./components/booking/booking";

class MaineRoute extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Switch>
              <div>
                <PrivateRoute exact path="/" component={App} />
                <Route path="/login" component={LogIn} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/appointments" component={Appointments} />
                <Route path="/booking" component={Booking} />
                <Route path="/carbooking" component={Carbooking} />
                <Route path="/moviebooking" component={Moviebooking} />
              </div>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default MaineRoute;
