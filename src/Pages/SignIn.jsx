import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions.js";
import Navbar from "../Components/NavBar.jsx";

const SignIn = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispach = useDispatch()
  const authStore = useSelector(state => state.authStore)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispach(login({email, password}))
  }

  const loading = authStore.loading
  const error = authStore.error


  return (
    <>
    <Navbar /> 
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4"> 
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">o</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <Link to="http://localhost:8080/api/auth/signin/google">
          <button
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600 transition"
          >
            <FaGoogle className="h-5 w-5 mr-2" />
            Whit Google
          </button>
        </Link>

        <Link to="/signup">
          <button
            type="button"
            className="w-full bg-green-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-green-600 transition mt-6"
          >

            Sign Up
          </button>
        </Link>
        {loading && <p className="text-center text-blue-700"> Loadin...</p>}
        {error && <p className="text-center text-red-700"> 🚧 Credentials error 🚧 </p>}
      </div>
    </div>
    </>
  );
};

export default SignIn;
