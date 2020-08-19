import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Ride = props => (
  <tr>
    <td>{props.ride.username}</td>
    <td>{props.ride.description}</td>
    <td>{props.ride.duration}</td>
    <td>{props.ride.distance}</td>
    <td>{props.ride.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.ride._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRide(props.ride._id) }}>delete</a>
    </td>
  </tr>
)
export default class RideList extends Component {

  constructor(props) {
    super(props);
    this.deleteRide = this.deleteRide.bind(this);
    this.state = { rides: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/rides/')
      .then(response => {
        this.setState({ rides: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteRide(id) {
    axios.delete('http://localhost:5000/rides/' + id)
      .then(res => console.log(res.data));
    this.setState({
      rides: this.state.rides.filter(el => el._id !== id)
    })
  }

  rideList() {
    return this.state.rides.map(currentride => {
      return <Ride
        ride={currentride}
        deleteRide={this.deleteRide}
        key={currentride._id}
      />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Rides</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Distance</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.rideList()}
          </tbody>
        </table>
      </div>
    );
  }
}