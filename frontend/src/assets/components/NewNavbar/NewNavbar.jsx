//IMPORTACIONES
import { Navigation,  Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import  { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//CSS personalizado
import './NewNavbar.css';


//IMG DE NAVBAR

import { dataCarousel } from '../constants';
import Search from '../Search/Search';
import ServicesDropdown from '../ServicesDropdown/ServicesDropdown';

const NewNavbar = () => {
  //!!LOGICA DEL COMPONENTE
//LOGICA DE DESPLIEGUE NAVBAR RESPONSIVE
const [menuVisible, setMenuVisible] = useState(false);

const openMenu = () => {
  setMenuVisible(!menuVisible);
  console.log(menuVisible)
};

  return (
    <div className='flex justify-center flex-col  h-[700px] lg:h-[700px]  '>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
       
        modules={[EffectFade, Navigation, Autoplay]}
        //autoplay={{ delay: 3000 }}
        loop={true}
      >

        {dataCarousel.map((item) => (
          <SwiperSlide key={item.title}>
            {/*MANEJA EL TAMAÑO Y LAS CLASES DE LOS SLIDES/CARDS DEL CAROUSEL */}
            <div className='lg:h-[600px]  lg:w-screen overflow-hidden '> 
            {/*CONFIGURACION DE LA IMG Y LA INFO QUE SE MUESTRA DENTRO DE ELLA*/}
            <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:`url(${item.backgroundImage})` }}/>
                            

            {/*!! Contenido de la barra de navegación */}

             
                
        
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/*ELEMENTO DEL NAV INYECTADO*/}
       
      
       <nav className='bg-gray-800  lg:bg-transparent py-6 relative'>
        <div className="container mx-auto flex px-8 xl:px-0">
          {/*IMAGEN DE LOGO AQUI SOLO SE DEBE REEMPLAZAR*/}
          <div className='flex flex-grow items-center lg:mr-7 '> 
            <img src="./Flag_of_None.svg.png" alt="none" /> 
          </div>
          {/*BTN AL HACERSE RESPONSIVE*/}
          
          <div className='flex lg:hidden'  >
          <input type="checkbox" id="checkbox" onClick={openMenu}/>
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
          </div>

  
          {/*LOGICA PARA DESPLIEGUE DEL MENU RESPONSIVO*/}
          {menuVisible && (
            <div className=' absolute top-20 bg-gray-800 w-full items-center lg:relative lg:hidden lg:top-0 left-0 py-14 lg:py-0 px-8 mb-8 '>

                  <div className='mb-8'>
                    <Search/>
                  </div>
                <ul className='flex flex-col lg:flex-row text-center mb-8 lg:mb-0'>
                  <li className='text-white lg:mr-7 mb-8 lg:mb-0'>
                  <ServicesDropdown />
                  </li>
                  <li className='text-white lg:mr-7 mb-8 lg:mb-0'>Como funciona</li>
                  <li className='text-white lg:mr-7 mb-8 lg:mb-0'>Acerca de</li>
                </ul>
                  <div className='flex flex-col lg:flex-row text-center'>
                    <button className="btnIniSesion mb-8">Iniciar Sesion</button>
                    <button className="btnCrearUs">Crear Cuenta</button>
                  </div>

            </div>
          )}

                {/*BTNES DE LA NAVBAR EN LG*/}
              <div className='lg:flex hidden flex-grow justify-between lg:relative lg:top-0'>
                <ul className='flex space-x-12'>
                  <li className="hover:bg-gray-700 py-2 px-2 rounded cursor-pointer text-white lg:mr-7 transition duration-500 ease-in-out">Inicio</li>
                 
                 <li className='cursor-pointer rounded py-2 px-2'>
                  <ServicesDropdown />
                 </li>
                  

                  <li className="hover:bg-gray-700 py-2 px-2 rounded cursor-pointer text-white lg:mr-7 transition duration-500 ease-in-out">Cómo Funciona</li>
                  <li className="hover:bg-gray-700 py-2 px-2 rounded cursor-pointer text-white lg:mr-7 transition duration-500 ease-in-out">Acerca de</li>
                </ul>
                  <div >
                    <button className="btnIniSesion ">Iniciar Sesion</button>
                    <button className="btnCrearUs">Crear Cuenta</button>      
                  </div>
              </div>
              
        </div>

              {/*COMPONENTE SEARCH RESPONSIVE*/}
        <div className='hidden sm:hidden md:hidden lg:flex justify-end mt-20 mr-20 '>
          <Search/>
        </div>
 


      </nav>
      


    </div>
  );
};

export default NewNavbar;
