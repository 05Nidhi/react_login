import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
