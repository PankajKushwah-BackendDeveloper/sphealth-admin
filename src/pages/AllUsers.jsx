import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { fetchUsers, deleteUser } from '../user/updateuser';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1); // current page
  const recordPage = 8; // records per page
  const lastIndex = currentPage * recordPage;
  const firstIndex = lastIndex - recordPage;
  const records = users.slice(firstIndex, lastIndex);
  const npage = Math.ceil(users.length / recordPage);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEditClick = id => {
    navigate(`/editUser/${id}`);
  };

  const handleDeleteClick = id => {
    dispatch(deleteUser(id));
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full sm:w-[90%] h-full py-0">
      <h1 className="text-3xl font-semibold mb-2 dark:text-white ml-9">Users</h1>
      <div className="overflow-x-auto sm:mx-10 w-full">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 h-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Full Name</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Email</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Mobile no</th>
              <th scope="col" className="px-1 w-80 py-2 sm:px-1 sm:py-3">Total Check-ins</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Purpose</th>
              <th scope="col" className="px-4 w-96 py-2 sm:px-6 sm:py-3">Stage & Level</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map(data => (
              <tr key={data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.firstname} {data.lastname}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-2">{data.email}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-2">{data.phone}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-2">{data.checkIns}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-2">{data.purpose}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-2">{data.level}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-2 flex">
                  <button
                    type="button"
                    className="hover:-translate-y-1 hover:scale-110 hover:text-blue-800 duration-300 text-blue-800 mx-2 text-lg"
                    onClick={() => handleEditClick(data._id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    className="hover:-translate-y-1 hover:scale-110 hover:text-[#ED0800] duration-300 text-[#ED0800] text-2xl mx-2"
                    onClick={() => handleDeleteClick(data._id)}
                  >
                    <MdOutlineDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex space-x-5 justify-center my-4 ">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-500 dark:hover:text-white rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-500 dark:hover:text-white rounded"
            disabled={currentPage === npage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
