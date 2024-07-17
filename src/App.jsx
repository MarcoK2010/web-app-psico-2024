import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard';
import Appointment from './pages/appointment/Appointment';
import Calendar from './pages/calendar/Calendar'

// Componente principal que define las rutas
const App = () => {
  return (
    
      <BrowserRouter >
  <Routes>
    <Route path="/" element={      <Login/> } />
    <Route path="/dashboard" element={      <Dashboard/> } />
    <Route path="/appointment" element={      <Appointment/> } />
    <Route path="/calendar" element={      <Calendar/> } />
  </Routes>
</BrowserRouter>
   
  );
};

export default App;

