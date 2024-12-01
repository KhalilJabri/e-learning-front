import React from 'react';
// import './App.css';
import Dashboard from './screen/dashboard/Dashboard';
import Login from './screen/login/login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
    </Routes>
  );
}


export default App;
