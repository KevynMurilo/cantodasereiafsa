import React, { useState, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import "./navigation.css";

import teste from "../../assets/teste.png";
import icon1 from "../../assets/icons8-caranguejo-50 (1).png";
import icon2 from "../../assets/icons8-lagosta-50 (1).png";
import icon3 from "../../assets/icons8-peixe-60 2.png";

register();

export default function Specialties() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = useMemo(() => ({
    navigation: true,
    pagination: false,
    slidesPerView: slidesPerView,
    spaceBetween: 0,
  }), [slidesPerView]);

  const imagens = useMemo(() => ([
    { src: teste, nome: "Nome do prato 1" },
    { src: teste, nome: "Nome do prato 2" },
    { src: teste, nome: "Nome do prato 3" },
    { src: teste, nome: "Nome do prato 4" },
    { src: teste, nome: "Nome do prato 5" },
    { src: teste, nome: "Nome do prato 6" }
  ]), []);

  return (
    <>
    {/*MOBILE*/}
      <div id='specialties' className="lg:hidden">
        <div className='mt-12'>
          <div className='flex flex-col items-center justify-center'>
            <span className='w-1/2 h-0.5 mt-5 bg-black flex justify-center items-center'></span>
            <h1 className="text-center text-3xl font-light mt-5 mb-10">ESPECIALIDADES</h1>
          </div>

          <Swiper {...settings} className="mt-2 carousel-slider">
            {imagens.map((imagem, index) => (
              <SwiperSlide key={index} className="text-center outline-none"> 
                <div className="flex flex-col items-center px-12">
                  <img src={teste} alt={`Prato ${index + 1}`} className={`w-full max-w-[340px] h-auto lg:max-w-[500px] lg:max-h-3/5 object-cover rounded-full`} loading="lazy"/>
                  <p className="mt-5 font-bold text-xl text-gray-500">{imagem.nome}</p>
                </div>
                <div className="swiper-pagination pagination-custom"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/*DESKTOP*/}
      <div id='specialtiesD' className="hidden lg:block container max-w-[2500px] mx-auto">
        <div className='px-44'>
          <div className='flex flex-col items-center justify-center'>
            <span className='w-96 h-0.5 mt-5 bg-black flex justify-center items-center'></span>
            <h1 className="text-center text-3xl mt-10 mb-28">ESPECIALIDADES DA CASA</h1>
          </div>

          <div className="relative">
            <div className="absolute -left-28 gap-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
              <img src={icon1} alt="Left Icon 1" className="w-8 h-8 mb-2" />
              <img src={icon2} alt="Left Icon 2" className="w-8 h-8 mb-2" />
              <img src={icon3} alt="Left Icon 3" className="w-8 h-8 mb-2" />
            </div>

            <Swiper {...settings} className="mt-2 carousel-slider">
              {imagens.map((imagem, index) => (
                <SwiperSlide key={index} className="text-center outline-none">
                  <div className="flex flex-col items-center cursor-pointer">
                    <img src={teste} alt={`Prato ${index + 1}`} className={`w-4/5 h-auto  lg:max-h-3/5 object-cover rounded-full`} loading="lazy"/>
                    <p className="mt-5 font-bold text-xl text-gray-500">{imagem.nome}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute -right-28 gap-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
              <img src={icon1} alt="Right Icon 1" className="w-8 h-8 mb-2" />
              <img src={icon2} alt="Right Icon 2" className="w-8 h-8 mb-2" />
              <img src={icon3} alt="Right Icon 3" className="w-8 h-8 mb-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
