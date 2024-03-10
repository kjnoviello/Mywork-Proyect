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



const NewNavbar = () => {
//LOGICA DEL COMPONENTE


    return (
    <div>
                <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination,Autoplay]}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src="./img/img1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
        </Swiper>
    </div>
    )
}

export default NewNavbar