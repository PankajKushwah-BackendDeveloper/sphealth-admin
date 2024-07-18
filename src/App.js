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
import Login from './pages/Login';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import EditUserForm from './components/updateuser';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route>
                    <Route element={<Layout />}>
                        <Route index element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/myProfile" element={<MyProfile />} />
                        <Route path="/allAdmins" element={<AllAdmins />} />
                        <Route path="/allUsers" element={<AllUsers />} />
                        <Route path="/editUser/:id" element={<EditUserForm />} />
                        <Route path="/createUser" element={<CreateUser />} />
                        <Route path="/createAdmin" element={<CreateAdmin />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
