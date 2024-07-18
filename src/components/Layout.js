import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import PrivateRoute from '../auth/ProtectedRoute'
// import { Navigate, Route, Routes } from 'react-router-dom';

const Layout = () => {

    // const ProtectedRoute = ({ children }) => {
    //     const isLoggedIn = localStorage.getItem("authToken") !== null || false;

    //     if (!isLoggedIn) {
    //       return <Navigate to={"/login"} />;
    //     }else if(isLoggedIn && ['/signIn','/signUp'].includes(window.location.pathname)){
    //      return <Navigate to={'/'}/>
    //     }

    //     return children;
    //   };

    return (
        <PrivateRoute>
            <div className='flex flex-auto h-screen sm:h-full  '>
                <Sidebar />
                <div className='grow w-full '>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </PrivateRoute>
    )
}

export default Layout
