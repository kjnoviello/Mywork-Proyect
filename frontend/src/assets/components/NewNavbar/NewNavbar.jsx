//IMPORTACIONES
import { Navigation,  Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//CSS personalizado
import './NewNavbar.css';

//IMG DE NAVBAR

import { dataCarousel } from '../constants';

const NewNavbar = () => {
  //LOGICA DEL COMPONENTE
  return (
    <div className='flex justify-center flex-col h-[700px] lg:h-[700px]  '>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
       
        modules={[EffectFade, Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {dataCarousel.map((item) => (
          <SwiperSlide key={item.title}>
             <div className='lg:h-[600px]  lg:w-screen overflow-hidden '> {/*MANEJA EL TAMAÑO Y LAS CLASES DE LOS SLIDES/CARDS DEL CAROUSEL */}
                              {/*CONFIGURACION DE LA IMG Y LA INFO QUE SE MUESTRA DENTRO DE ELLA*/}
                  <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:`url(${item.backgroundImage})` }}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewNavbar;
