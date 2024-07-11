import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import AllAdmins from './pages/AllAdmins';
import AllUsers from './pages/AllUsers';
import CreateUser from './pages/CreateUser';
import CreateAdmin from './pages/CreateAdmin';
import Course from './pages/Course';
import LogOut from './pages/LogOut';
import Login from './pages/Login';

function App() {
    const isLoggedIn = localStorage.getItem("authToken") !== null;

    return (
        <BrowserRouter>
            {isLoggedIn ? (
                <Layout>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/myProfile" element={<MyProfile />} />
                        <Route path="/allAdmins" element={<AllAdmins />} />
                        <Route path="/allUsers" element={<AllUsers />} />
                        <Route path="/createUser" element={<CreateUser />} />
                        <Route path="/createAdmin" element={<CreateAdmin />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/logOut" element={<LogOut />} />
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                </Layout>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;
