import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import page & components
import Dashboard from './Components/Dashboard';
import Dashboard2 from './Components/Dashboard2';
import DashboardNew from './Components/DashboardNew';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard2/>} />
          <Route path='*' element={<Navigate to='/home' replace />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}