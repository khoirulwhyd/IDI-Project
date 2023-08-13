import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import page & components
import Dashboard from './Pages/Dashboard';
import Login from "./Pages/Auth/Login"

//data profesi -> dokter spesialis
import IndexSpesialis from "./Pages/DataProfesi/DokterSpesialis/IndexSpesialis";

//data pribadi
import IndexDatapribadi from "./Pages/DataPribadi/IndexDatapribadi";
import EditDataPribadi from "./Pages/DataPribadi/EditDatapribadi"
import CreateDatapribadi from "./Pages/DataPribadi/CreateDatapribadi";

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

          {/* data pribadi routes */}
          <Route path='/datapribadi' element={<IndexDatapribadi />} />
          <Route path='/editdatapribadi' element={<EditDataPribadi />} />
          <Route path='/createdatapribadi' element={<CreateDatapribadi />} />
          {/* data pribadi routes */}
          {/* dataprofesiroutes -<Route path="/keanggotaan" element={<Indexdatakeanggotaan />} />> dokter spesialis */}
          <Route path="/dokterspesialis" element={<IndexSpesialis />} />

          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/sidebard' element={<Sidebard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}