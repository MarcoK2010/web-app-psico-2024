import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from "../src/pages/login/components/LoginForm"

// Componente principal que define las rutas
const App = () => {
  return (
<BrowserRouter>
<Routes>
  
          <Route path="/Login" element={<LoginForm/>} />

      
    </Routes>
</BrowserRouter>
  );
};

export default App;

