import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'
import {useSelector} from 'react-redux'
import Dashboard from './pages/dashboard/Dashboard';
import Appointment from './pages/appointment/Appointment';

// Componente principal que define las rutas
const App = () => {
  //pidiendo el estado inicial que se encuentra en slice.js
  const taskState = useSelector(state => state.task)
  console.log(taskState)

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={      <Login/> } />
    <Route path="/dashboard" element={      <Dashboard/> } />
    <Route path="appointment" element={      <Appointment/> } />
  </Routes>
</BrowserRouter>
  );
};

export default App;

