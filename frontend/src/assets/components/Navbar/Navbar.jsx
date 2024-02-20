// NavbarWithParallax.js
import  { useState, useEffect } from 'react';
import './Navbar.css/'
import Search from '../Search/Search';
import img1 from './img1.jpg';
import img2 from './img2.jpg'; 
import img3 from './img3.jpg'; 


const Navbar = () => {
  const images = [img1, img2 , img3]; // Agrega más imágenes aquí
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Reducir gradualmente la opacidad al cambiar de imagen
      setOpacity((prevOpacity) => Math.max(prevOpacity - 0.1, 0));

      // Cambiar la imagen después de una breve pausa
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

        // Restablecer gradualmente la opacidad al mostrar la siguiente imagen
        setOpacity((prevOpacity) => Math.min(prevOpacity + 0.1, 1));
      }, 700);

    }, 5000);
    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen">
      {/* Fondo de parallax */}
      <div
        className="absolute top-0 left-0 w-screen h-4/5 bg-cover bg-center transition duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})`, opacity}}
      ></div>

      {/* Contenido de la barra de navegación */}
      <nav className="absolute top-0 left-0 w-full p-5 text-white z-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Logo</div>           
          <ul className="flex gap-4 ml-[-800px] fuenteNav"> {/* los pixeles negativos posicionan al contenedor de los "li" mas a la izquierda */}
            <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Inicio</li>
            <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Servicios</li>
            <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Cómo Funciona</li>
            <li className="hover:bg-gray-700 py-2 px-4 rounded cursor-pointer">Acerca de</li>
          </ul>

          <div className="flex gap-4 ">
            <button className="color hover:bg-blue-700 py-3 px-4 rounded-full fuenteNav2Bt">Iniciar sesión</button>
            <button className="hover:bg-gray-700 py-3 px-4  border border-gray-300 rounded-full fuenteNav2Bt">Crear Cuenta</button>
          </div>
          
        </div>

        
        
        
        

        <div className="text-center text-4xl font-semibold text-gray-800 mt-80 fuentePortada">
          Encuentra, Contrata, Brilla <br />
          Donde los Servicios <span >Brillan</span>
        </div>
        
          <div className="ml-custom mt-custom">
          <Search/>
        </div>

      </nav>
      
      
    </div>
  );
};

export default Navbar;
