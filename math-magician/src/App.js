import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Quote from './components/Quote'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
        <Route path="/" exact component={<App/>} />
        <Route path="/calculator" component={<Calculator/>} />
        <Route path="/quote" component={<Quote/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
