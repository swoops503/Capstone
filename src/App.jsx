import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Homepage } from './assets/Pages/HomePage';

const App = () => {
  return (
    <Router> 
      <div className="main-container">
        <div className="route-container">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
        <Homepage />
      </div>
    </Router>
  );
};

export default App;
