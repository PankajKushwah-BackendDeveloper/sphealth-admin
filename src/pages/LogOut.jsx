
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const navigate = useNavigate();

    useEffect(() => {
       localStorage.removeItem("authToken");
       console.log('LogOut successfully');
       window.location.reload();
       navigate('/login');
    }, [navigate]);

  return (
    <div>
      <h1>Logout</h1>
    </div>
  )
}

export default LogOut;

