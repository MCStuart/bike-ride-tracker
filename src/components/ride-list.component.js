import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Ride = props => (
  <tr>
    <td>{props.ride.username}</td>
    <td>{props.ride.description}</td>
    <td>{props.ride.duration}</td>
    <td>{props.ride.distance}</td>
    <td>{props.ride.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.ride._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRide(props.ride._id) }}>delete</a>
    </td>
  </tr>
)

function RideList(props) {

  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/rides/');

      setRides(response.data)
    };

    fetchData();
  }, []);

  const deleteRide = (id) => {
    axios.delete('http://localhost:5000/rides/' + id);

    setRides(rides.filter(el => el._id !== id))
  }


  const rideList = () => {
    return rides.map(currentride => {
      return <Ride
        ride={currentride}
        deleteRide={deleteRide}
        key={currentride._id}
      />;
    })
  }

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
          {rideList()}
        </tbody>
      </table>
    </div>
  );
}


export default RideList;