import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateRide = (props) => {

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/users/');
      if (response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
        setUsername(response.data[0].username);
      }
    }
    fetchData();
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  }
  const onChangeDistance = (e) => {
    setDistance(e.target.value);
  }
  const onChangeDate = (date) => {
    setDate(date);
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const ride = {
      username: username,
      description: description,
      duration: duration,
      distance: distance,
      date: date
    };

    console.log(ride);

    axios.post('http://localhost:5000/rides/add', ride)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  return (
    <div>
      <h3>Create New Ride Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}>
            {
              users.map(user => {
                return <option key={user} value={user}>{user}</option>;
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Distance (in miles): </label>
          <input
            type="text"
            className="form-control"
            value={distance}
            onChange={onChangeDistance}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Ride Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}


export default CreateRide; 