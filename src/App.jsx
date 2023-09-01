import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Homepage } from './assets/Pages/HomePage';
import { Profile } from './assets/Pages/Profile';

const App = () => {
  return (
    <Router> 
      <div className="main-container">
        <div className="route-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
        <Homepage />
      </div>
    </Router>
  );
};

export default App;
