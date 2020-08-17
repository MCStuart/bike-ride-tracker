import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">RideTracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Rides</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Ride Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;