import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import AddNewUserPage from './AddUserPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/undefined" element={<App />} />
        <Route path="/index" Component={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/addNewUser" element={<AddNewUserPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
