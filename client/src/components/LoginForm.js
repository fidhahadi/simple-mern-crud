import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CrudComponent from './CrudComponent';


const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    console.log(email);
    console.log("pass", password );
    e.preventDefault();
    try {
      const data = await axios(`http://localhost:3080/signin`, {
     method: "POST", 
      data: {
       email: email,
       password: password,
      } 

    });
    console.log(data);
    }
     catch(error) {
      console.log(error);
     }
    // Handle form submission logic here
    navigate('/crudui');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-13" onSubmit={<CrudComponent />}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={handleSubmit}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
