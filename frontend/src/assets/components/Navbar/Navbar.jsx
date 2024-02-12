// Navbar.js
//import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <ul className="flex gap-4">
        <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Inicio</li>
        <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Servicios</li>
        <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Como Funciona</li>
        <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Acerca de</li>
      </ul>
      <div className="flex gap-4">
        <button className="hover:bg-gray-700 py-2 px-4 rounded">Iniciar sesión</button>
        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">Crear cuenta</button>
      </div>
    </nav>
  );
  
}

export default Navbar;
