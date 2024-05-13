import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard';

// Componente principal que define las rutas
const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={      <Login/> } />
    <Route path="/dashboard" element={      <Dashboard/> } />
  </Routes>
</BrowserRouter>
  );
};

export default App;

