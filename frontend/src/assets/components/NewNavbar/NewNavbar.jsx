//IMPORTACIONES
import { Navigation, Pagination, Autoplay,EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//CSS personalizado
import './NewNavbar.css';

import { dataCarousel } from '../constants';

const NewNavbar = () => {
//LOGICA DEL COMPONENTE


    return (
    <div className='flex justify-center flex-col h-[700px] lg:h-[700px]  bg-[#ee3131fb]'>
                <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination,Autoplay]}
            autoplay={{ delay: 3000 }}
            
        >
           {dataCarousel.map((item)=>{
            <SwiperSlide key={item.title}>
           <div style={{backgroundImage:`url(${item.backgroundImage})` }}/>
           <h1 className='text-xl lg:text-2xl text-white'>{item.title}</h1>
            </SwiperSlide>
           })}
            
           
        </Swiper>
    </div>
    )
}

export default NewNavbar