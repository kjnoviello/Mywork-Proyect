//Importaciones de los modulos que necesita SWIPER para funcionar
import { Navigation, Pagination, FreeMode, Autoplay,EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//icono de la flecha dentro de los slides que hacen una animacion
import {RxArrowTopRight} from 'react-icons/rx' 

//estilos para la etiqueta "hr"
import './Carousel.css' 

//importaciones de estilos de SWIPER
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ServiceData } from '../constants';


const Carousel = () => {

  return (
    
    <div className='flex justify-center flex-col h-[700px] lg:h-[700px]  bg-[#9862dac9]'>      
    
      <div className='lg:border-2 lg:rounded lg:h-[600px] lg:ml-40 lg:mr-40 bg-[#6b34aff3]'> {/* contenedor del borde maneja el color interno donde estan las cards */}

      <div className='flex mb-10 lg:mt-4 items-start justify-center lg:justify-start  lg:ml-40'>
      <h1 className='text-white '>SERVICIOS</h1>
      </div>

      <Swiper  
        breakpoints={{
          340:{slidesPerView:2, //maneja la cantidad de slides cuando la pantalla es menor a 340px
              spaceBetween:15 
              },
          700:{
            slidesPerView:4, //maneja la cantidad de slides cuando la pantalla es mayor a 700px
            spaceBetween:15
          }
        }}
        freeMode={true}
        effect={'coverflow'} //INDICA EL EFECTO APLICADO
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{  //CONTROLES DEL EFECTO COVERFLOW
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,//Propiedad que le da un shadow a los slides por defecto viene activado
        }}
        loop={true} //hace que las flechas del carousel al correr y llegar a la ult viñeta pueda correr a la primera denuevo 
        pagination={{clickable:true}} //habilita los circulos de navegacion de viñetas
        modules={[FreeMode, Pagination, Autoplay,Navigation,EffectCoverflow]} //SE EXPORTAN LOS MODULOS PARA SU UTILIZACION
        navigation={true} // ACTIVA LAS FLECHAS DEL CAROUSEL CON SU LOGICA DE MOVIMIENTO
        autoplay={{ delay: 3000 }} // Tiempo de espera entre las transiciones automáticas para el movimiento del carousel
        className='max-w-[100%] lg:max-w-[80%] lg:max-h-[50%]' //Tamaño del carousel
        >
          {ServiceData.map((item)=>
        <SwiperSlide key={item.title}>
              <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[300px]  lg:w-[250px] overflow-hidden cursor-pointer'
                > {/*MANEJA EL TAMAÑO Y LAS CLASES DE LOS SLIDES/CARDS DEL CAROUSEL */}
                              {/*CONFIGURACION DE LA IMG Y LA INFO QUE SE MUESTRA DENTRO DE ELLA*/}
                  <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:`url(${item.backgroundImage})` }}/>
                  <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 ' />
                  <div className='relative flex flex-col gap-3'>
                    <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]' />
                    <h1 className='text-xl lg:text-2xl text-white'>{item.title}</h1>
                    <p className='lg:text-[18px]'>{item.content}</p>
                  </div>
                  <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-300'/>
              </div>
        </SwiperSlide>
          )}

      </Swiper>

        <div className='flex justify-center mb-3'>
          <hr className=' w-[20%] border-2 border-white mt-10 lg:mt-20 box-shadow-up' />
          
        </div>
        </div>
    </div>
   
  );
};

export default Carousel;