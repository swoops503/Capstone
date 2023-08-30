import React from 'react';
import { Link } from 'react-router-dom';
import { Homepage } from '../Pages/HomePage';

export const Navbar = () => {
  return (
    <div className="navbar">
        <h1>FakeStore.Gov</h1>
      <Link to="/">Home </Link> |
      <Link to="/Profile"> Profile </Link>
    </div>
  );
}