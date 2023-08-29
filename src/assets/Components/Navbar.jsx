import React from 'react';
import { Link } from 'react-router-dom';
import { Homepage } from '../Pages/HomePage';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <h1>FakeStore.Gov</h1>
      </div>
      <Link to="/">Home</Link>|
      <Link to="/Profile">Profile</Link>
    </div>
  );
}