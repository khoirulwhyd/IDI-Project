import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import page & components
import Dashboard from './Pages/Dashboard';
import Dashboard2 from './Pages/Dashboard2';
import DashboardNew from './Pages/DashboardNew';
import Login from "./Pages/Auth/Login"
import Indexdatakeanggotaan from "./Pages/DataKeanggotan/Indexdatakeanggotaan";
import DataPribadi from "./Pages/PersonalData/DataPribadi";
import EditKeanggotaan from "./Pages/DataKeanggotan/editDatakeanggotaan";

//import component
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard2/>} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='*' element={<Navigate to='/home' replace />} /> */}

          <Route path="/keanggotaan" element={<Indexdatakeanggotaan />} />
          <Route path="/datapribadi" element={<DataPribadi />} />
          <Route path="/editDatakeanggotaan" element={<EditKeanggotaan />} />
          <Route path='/sidebar' element={<Sidebar />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}