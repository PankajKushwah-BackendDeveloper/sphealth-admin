import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
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
        setUsers(response.data.users);
        console.log(response)
     

        
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error as needed, e.g., show error message to the user
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleEditClick = (id) => {
    console.log(id)
    navigate(`/editUser/${id}`);
  };

  const RemoveUser = () => {
   };
  return (
    <div className="h-[70%] w-full sm:w-[90%]">

    
    <div className="relative overflow-x-auto mx-2 ">
    <h1 className="text-3xl font-bold mb-3">User</h1>
    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase   bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Full Name</th>
          <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Email</th>
          <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Mobile no</th>
          <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Gender</th>
          <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((data) => (
          <tr key={data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {data.firstname} {data.lastname}
            </td>
            <td className="px-4 py-2 sm:px-6 sm:py-2">{data.email} {data.totalUsers}</td>
            <td className="px-4 py-2 sm:px-6 sm:py-2">{data.phone}</td>
            <td className="px-4 py-2 sm:px-6 sm:py-2">{data.gender}</td>
            <td className="px-4 py-2 sm:px-6 sm:py-2">
              
              <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                value={data._id}
                onClick={() => handleEditClick(data._id)}>Edit</button>
              <button type="button" class="focus:outline-none text-white bg-[#ED0800] hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 sm:mx-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
               value={data._id}
               onClick={RemoveUser}
              > Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
);
};



export default AllUsers
