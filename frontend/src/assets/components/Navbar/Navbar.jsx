//IMPORTACION DEL ESTILO Y COMPONENTE QUE CONTIENE EL NAV
import NavInfo from '../NavInfo/NavInfo';
import './Navbar.css/'  //SE PUEDE ELIMINAR

//IMPORTACIONES DE SWIPER
import { Navigation,  Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//IMPORTA EL ARCHIVO CONSTANT QUE CONTIENE LA INFO DE IMGs
import { dataCarousel } from '../constants';

const Navbar = () => {

  return (
    //NAVBAR:
    <div className='flex justify-center flex-col  h-[700px] lg:h-[700px]  '>

          {/*POSICIONA EL COMPONENTE QUE CONTIENE EL NAV POR ENCIMA DEL SLIDE PARA QUE NO SE VEA AFECTADO POR LA ITERACION DE LA MISMA*/}
          <div className="absolute top-0 left-0 right-0 z-10">
            <NavInfo />
          </div>

          <Swiper
          //CONFIGURACION DEL SWIPER
            spaceBetween={30}
            effect={'fade'}
            navigation={false}
            modules={[EffectFade, Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
            >
              
              {/*ITERADOR QUE PARA CADA IMG GENERE UN SLIDE*/}
            {dataCarousel.map((item) => (
              <SwiperSlide key={item.title}>
                {/*MANEJA EL TAMAÑO Y LAS CLASES DE LOS SLIDES/CARDS DEL CAROUSEL */}
                <div className='lg:h-[600px]  lg:w-screen overflow-hidden '> 
                  {/*CONFIGURACION DE LA IMG Y LA INFO QUE SE MUESTRA DENTRO DE ELLA*/}
                  <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:`url(${item.backgroundImage})` }}/>
                 
                </div>
              </SwiperSlide>
            ))}



            
          </Swiper>
    </div> //CIERRE DEL DIV PRINCIPAL 
  );
};

export default Navbar;
