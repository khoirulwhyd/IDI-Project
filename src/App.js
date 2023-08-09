import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import page & components
import Dashboard from './Pages/Dashboard';
import Dashboard2 from './Pages/Dashboard2';
import DashboardNew from './Pages/DashboardNew';
import Login from "./Pages/Auth/Login"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard2/>} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/home' replace />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}