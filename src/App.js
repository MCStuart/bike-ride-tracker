import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import RidesList from './components/ride-list.component';
import EditRide from './components/edit-ride.component';
import CreateRide from './components/create-ride.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={RidesList} />
        <Route path="/edit/:id" component={EditRide} />
        <Route path="/create" component={CreateRide} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;