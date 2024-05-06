import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login'

// Componente principal que define las rutas
const App = () => {
  return (
<BrowserRouter>
<Routes>
  
          <Route path="/Login" element={      <Login/> } />

      
    </Routes>
</BrowserRouter>
  );
};

export default App;

