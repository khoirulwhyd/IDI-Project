import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import page & components
import Dashboard from './Pages/Dashboard';


//data profesi -> dokter spesialis
import IndexSpesialis from "./Pages/DataProfesi/DokterSpesialis/IndexSpesialis";

//data pribadi


//import data profesi
import DataProfesi from './Layouts/DataProfesi/IndexDataprofesi';



//

import Navbar from "./Component/Nav/Navbar"
import DashboardUser from "./Layouts/DashboardUser";
import Sidebar from "./Components/Sidebar";
// Auth
import Register from "./Layouts/Auth/Register";
import Login from "./Layouts/Auth/Login";
//data pribadi
import IndexDatapribadi from "./Layouts/DataPribadi/IndexDatapribadi";
import EditDataPribadi from "./Layouts/DataPribadi/EditDatapribadi"

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

          {/* data pribadi routes */}
          <Route path='/datapribadi' element={<IndexDatapribadi />} />
          <Route path='/editdatapribadi' element={<EditDataPribadi />} />
          {/* data pribadi routes */}
          {/* dataprofesiroutes -<Route path="/keanggotaan" element={<Indexdatakeanggotaan />} />> dokter spesialis */}
          <Route path="/dokterspesialis" element={<IndexSpesialis />} />

          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/nav' element={<Navbar />} />
          {/* <Route path='/dashboard-user' element={<Dashboarduser />} /> */}

          {/* NEW */}
          <Route path='/dashboard-user' element={<DashboardUser />} />

          <Route path='/dataprofesi' element={<DataProfesi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}