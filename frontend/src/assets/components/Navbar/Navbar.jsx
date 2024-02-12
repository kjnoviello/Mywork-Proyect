// Navbar.js
//import React from 'react';
import './Navbar.css'; // Importa los estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Servicios</li>
        <li className="nav-item">Como Funciona</li>
        <li className="nav-item">Acerca de</li>
      </ul>
      <div className="button-container">
        <button>Iniciar sesión</button>
        <button>Crear cuenta</button>
      </div>
    </nav>
  );
}

export default Navbar;
