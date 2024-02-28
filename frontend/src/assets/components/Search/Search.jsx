// Search.js
//import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const popularServices = ['Diseño Gráfico', 'Desarrollo Web', 'Traducciones'];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex  items-center gap-2"> {/*PONER A COLUMNAS PARA EL RESPONSIVE*/}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar Servicio..."
            className="py-3 px-20  border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none"
        >
          Buscar
        </button>
      </div>

        
       {/*SE DEBE RECUPERAR DEL SERVIDOR LOS DATOS PARA LOS MAS BUSCADOS*/}
      <div className="flex items-center">
        <span className="text-white font-semibold mr-2">Más buscados:</span>
        <div className="flex gap-2">
          {popularServices.map((service, index) => (
            <button
              key={index}
              className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full hover:bg-gray-400 focus:outline-none text-sm"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
