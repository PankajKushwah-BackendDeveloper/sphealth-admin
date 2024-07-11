import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login");
        return;
      }

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.get(
          "http://157.173.222.27:8080/api/v1/user/get-all",
          options
        );
        setTotalUsers(response.data.totalUsers); 
        console.log(response);
       
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [navigate]);

  return (
    <div className="flex flex-row flex-wrap">
    
        <div className="m-5" >
          <div className="max-w-sm p-6 bg-gradient-to-b from-sky-800 to-sky-500 shadow-[10px_10px_30px_-5px_rgba(7,89,133,0.7)] shadow-sky-800 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-sky-200 dark:text-white">
                Users
              </h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              {totalUsers} 
            </p>
            <a
              href="/"
              className="inline-flex font-medium items-center text-gray-200 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
     
    </div>
  );
}

export default Dashboard;
