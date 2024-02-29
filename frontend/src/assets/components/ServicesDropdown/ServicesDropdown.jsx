// ServicesDropdown.js
import  { useState } from 'react';
import './ServicesDropdown.css'; 

const ServicesDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //! LISTA DE SERVICIOS QUE DEBE SER OBTENIDA DEL BACKEND 
  const listaServicios = ['Servicio 1', 'Servicio 2', 'Servicio 3'];

  return (
    //CONDICIONAL DE RENDERIZADO
    <div className={`services-dropdown ${isDropdownOpen ? 'open' : ''}`}>

      <span onClick={toggleDropdown}>
        Servicios <i className={`arrow-icon ${isDropdownOpen ? 'up' : 'down'}`}></i>
      </span>

      {/*LOGICA DE DESPLIEGUE DEL MENU DE SERVICIOS*/}
      {isDropdownOpen && (
        <ul >
          {listaServicios.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default ServicesDropdown;
