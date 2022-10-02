import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import ShowPersons from './pages/showPersons/ShowPersons'
import NoPage from './pages/noPage/NoPage'
import Profile from './pages/profile/Profile';
import CreateUser from './pages/createUser/CreateUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>       
        <Route index element={<Home />} />
        <Route path='/showPersons' element={<ShowPersons />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

