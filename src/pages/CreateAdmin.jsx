import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "http://157.173.222.27:8080/api/v1/auth/admin/sign-up",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Admin created successfully");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error(
        "An error occurred during registration or emailid is already created",
        error
      );
      toast.error("Email Id already registered");
    }
  };

  return (
    <div className="h-[70%] flex items-center justify-center mt-10 dark:bg-slate-800">
      <div className="bg-customLightBlue p-8 rounded h-[430px] shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-gray-100">
          Create Admin
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-white dark:text-gray-800 pl-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-white dark:text-gray-800 pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-white dark:text-gray-800 pl-3"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full border border-white text-white py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
          >
            Create
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateAdmin;
