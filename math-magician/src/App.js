import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Adjust the import path based on your project structure
import Calculator from './components/Calculator'; // Adjust the import path based on your project structure
import Quote from './components/Quote'; // Adjust the import path based on your project structure

const App = () => {
  return (
    
    <Router>
      <Navbar />
      <div className="container mt-3"> {/* Add margin-top to give space below navbar */}
        <Routes>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          {/* Add additional routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
