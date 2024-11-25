import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
        <form className="space-y-4">
        
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingresa tu apellido"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
         
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
              URL de la foto
            </label>
            <input
              type="url"
              id="photoUrl"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="https://example.com/tu-foto"
            />
          </div>
        
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              País
            </label>
            <select
              id="country"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Selecciona tu país</option>
              <option value="mexico">México</option>
              <option value="argentina">Argentina</option>
              <option value="colombia">Colombia</option>
              <option value="chile">Chile</option>
              <option value="espana">España</option>
              <option value="peru">Peru</option>
              <option value="venezuela">Venezuela</option>
              <option value="ecuador">Ecuador</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Registrarse
          </button>
        </form>
    
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">o</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      
        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600 transition"
        >
          <FaGoogle  className="h-5 w-5 mr-2"/>
          Registrarse con Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
