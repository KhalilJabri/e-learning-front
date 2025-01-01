import React from 'react';
// import './App.css';
import Dashboard from './screen/dashboard/Dashboard';
import Login from './screen/login/login';
import Stream from './components/stream/Stream';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/stream' element={<Stream />} />
    </Routes>
  );
}


export default App;
