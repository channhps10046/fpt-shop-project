import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import banner_1 from '../../assets/banner_1.webp';
import banner_2 from '../../assets/banner_2.webp';
import banner_3 from '../../assets/banner_3.webp';
import banner_4 from '../../assets/banner_4.webp';
import banner_5 from '../../assets/banner_5.webp';
import banner_6 from '../../assets/banner_6.webp';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = () => {
    return (
      <div className="slider">
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide className="swiper-slide">
      <img src={banner_1} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
      <img src={banner_2} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
      <img src={banner_3} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
      <img src={banner_4} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
      <img src={banner_5} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
      <img src={banner_6} alt="" />
      </SwiperSlide>
    
    </Swiper>
    </div>
    );
};

export default Slider;