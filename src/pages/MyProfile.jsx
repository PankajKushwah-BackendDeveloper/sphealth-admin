// import React, { useState } from 'react';

// const MyProfile = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('https://example.com/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log('Registration successful', data);
//     } else {
//       console.error('Registration failed');
//     }
//   };

//   return (
//     <div className="h-[70%] flex items-center justify-center bg-gray-100 dark:bg-slate-800">
//       <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 p-2 w-full border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };



// export default MyProfile


import React from 'react'

const MyProfile = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center'>My Profile</h1>
    </div>
  )
}

export default MyProfile

