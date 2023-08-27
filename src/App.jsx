import React from 'react';
import { Routes, Route } from "react-router-dom";
import { GetAllProducts } from './assets/Components/GetAllProducts';
import { Navbar } from './assets/Components/Navbar';

const App = () => {
  return (
     
    <div className="main-container">
    <div className="route-container">
    </div>      
      <GetAllProducts />
    </div>
  );
};

export default App;
