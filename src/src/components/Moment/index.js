import React, { memo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';

import sereia from "../../assets/sereia.png";
import foto1 from "../../assets/foto (2).png";
import foto2 from "../../assets/foto (3).png";
import foto3 from "../../assets/foto (1).png";
import foto4 from "../../assets/foto (4).png";

register();

const images = [foto1, foto2, foto3, foto4, foto1, foto2, foto3, foto4, foto1, foto2];

const Moment = () => {
  const settings = {
    navigation: false,
    pagination: {clickable: true},
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 5,
      }
    }
  };

  return (
    <section id="moment" className="py-8 container mx-auto max-w-[2500px]">
      <div className="flex justify-around items-center lg:hidden">
        <img src={sereia} alt="icon" className="w-6 h-6 lg:w-8 lg:h-8" />
        <h1 className="lg:text-lg text-xl text-aquamarine-text font-bold text-center">#MOMENTO<br />CANTODASEREIA</h1>
        <img src={sereia} alt="icon" className="w-6 h-6 lg:w-8 lg:h-8" />
      </div>

      <div className="hidden lg:flex justify-between items-center px-12">
        <img src={sereia} alt="icon" />
        <h1 className="text-xl lg:text-2xl w-1/2 text-center">
          Bom mesmo é curtir um{" "}
          <span className="text-aquamarine-text font-medium" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'}}>#MOMENTOCANTODASEREIA</span>{" "}
          com quem a gente gosta. Também queremos ver o seu! Poste usando nossa
          hashtag.
        </h1>
        <img src={sereia} alt="icon" />
      </div>

      <div className="px-4 lg:px-10 py-4">
        <Swiper {...settings}>
          {images.map((image, index) => (
            <SwiperSlide key={index} className="carouselSwiper outline-none cursor-pointer">
              <img src={image} alt={`Imagem ${index}`} className="w-full h-auto" loading="lazy" style={{borderRadius: 10}}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(Moment);
