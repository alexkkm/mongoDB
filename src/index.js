import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import AddNewUserPage from './AddUserPage';
import GetAllUserPage from './GetAllUserPage';
import SearchUserPage from './SearchUser';
import DeleteUserPage from './DeleteUserPage';
import EditUserPage from './EditUserPage';


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
        <Route path="/getUsers" element={<GetAllUserPage />} />
        <Route path="/searchUser" element={<SearchUserPage />} />
        <Route path="/deleteUser" element={<DeleteUserPage />} />
        <Route path="/editUser" element={<EditUserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
