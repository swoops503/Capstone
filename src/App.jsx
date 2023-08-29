import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import { GetAllProducts } from './assets/Components/GetAllProducts';
import { Navbar } from './assets/Components/Navbar';
import { Homepage } from './assets/Pages/HomePage';

const App = () => {
  return (
    <Router> 
      <div className="main-container">
        <div className="route-container">
          <Routes>
            <Route path="/" element={<GetAllProducts />} />
          </Routes>
        </div>
        <GetAllProducts />
      </div>
    </Router>
  );
};

export default App;
