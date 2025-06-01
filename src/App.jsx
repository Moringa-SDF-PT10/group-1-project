// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar1 from './NavBar1';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <NavBar1/>
      <Routes />
    </Router>
  );
};

export default NavBar1;
