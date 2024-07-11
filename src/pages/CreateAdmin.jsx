import React, { useState } from 'react';
import axios from 'axios';

const CreateAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
console.log(token,"tokenssss")
    try {
      const response = await axios.post(
        'http://157.173.222.27:8080/api/v1/user/register',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Registration successful', response.data);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };

  return (
    <div className="h-[70%] flex items-center justify-center  dark:bg-slate-800">
      <div className=" dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md  bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Create Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-300  pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 ">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-300 pl-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;
