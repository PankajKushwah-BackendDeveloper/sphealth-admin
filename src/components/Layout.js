import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import { Navigate, Route, Routes } from 'react-router-dom';

const Layout = ({ children }) => {

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
        <>
            <div className='flex flex-auto h-screen sm:h-full  '>
           
               <Sidebar />
                
                <div className='grow w-full '>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
