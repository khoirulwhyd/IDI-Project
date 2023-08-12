import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import page & components
import Dashboard from './Pages/Dashboard';
import Login from "./Pages/Auth/Login"
import Indexdatakeanggotaan from "./Pages/DataKeanggotan/Indexdatakeanggotaan";
import EditKeanggotaan from "./Pages/DataKeanggotan/editDatakeanggotaan";

//data profesi -> dokter spesialis
import IndexSpesialis from "./Pages/DataProfesi/DokterSpesialis/IndexSpesialis";

//import component
import Sidebar from "./Components/Sidebar";
import Sidebard from "./Components/SidebarData";
import Register from "./Pages/Auth/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* auth routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          
          {/* <Route path='*' element={<Navigate to='/home' replace />} /> */}

          <Route path="/keanggotaan" element={<Indexdatakeanggotaan />} />
          <Route path="/editDatakeanggotaan" element={<EditKeanggotaan />} />

          {/* dataprofesiroutes -<Route path="/keanggotaan" element={<Indexdatakeanggotaan />} />> dokter spesialis */}
          <Route path="/dokterspesialis" element={<IndexSpesialis />} />

          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/sidebard' element={<Sidebard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}