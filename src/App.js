import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import Signup from './components/siginup';
import Login from './components/login';
import Welcome from './components/welcome';
import CreatePost from './components/create-post';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
