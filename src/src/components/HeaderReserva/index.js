import React from "react";
import "./media.css"

import Teste from "../../assets/testeHeader.png";

export default function HeaderReserva(){
    const whatsappNumber = '5561981661974';

    return(
        <header>

             {/*MOBILE*/}
             <section id="header" className="overflow-x-hidden sm:w-full h-full lg:hidden">
                <div className="h-60 bg-aquamarine-bg" />

                <div>

                    <div className="relative top-0 transform -translate-y-1/2 flex flex-col justify-center items-center px-12 rotate-image">
                        <img src={Teste} alt="icon" className="w-80" />
                    </div>

                    <div className="flex flex-col justify-center items-center relative -top-20 left-0 right-0">
                        <h1 className="pb-2 text-4xl font-light text-center">Comida de Qualidade</h1>
                        <p className="pl-2 pr-2 text-lg text-center">Experiência gastronômica excepcional com vista deslumbrante no Restaurante Canto da Sereia.</p>

                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                            <button className="mt-10 w-48 h-14 text-xl lg:text-2xl rounded-full border-2 border-blue-500 shadow-lg">CONTATO</button>
                        </a>

                    </div>


                    <div className="bg-aquamarine-bg w-48 h-14 flex justify-center items-center shadow-lg rounded-r-full left-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <h1 className="text-white text-lg lg:text-xl">Formosa</h1>
                    </div>
                </div>
            </section>

            {/*DESKTOP*/}
            <section id="headerD" className="hidden lg:flex mx-auto relative h-screen max-h-[1200px] container max-w-[2500px]">
                <div className="w-full max-w-70 h-full flex justify-center items-center flex-col pr-40 bg-[#faf9f7]">
                    <h1 className="text-center text-4xl lg:text-6xl font-sans font-bold text-gray-800 mb-5">Comida de Qualidade</h1>
                    <h3 style={{ width: '60%' }} className="text-center text-xl lg:text-3xl font-light mb-5">Experiência gastronômica excepcional com vista deslumbrante no Restaurante Canto da Sereia.</h3>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <button className="w-56 h-16 mt-4 text-xl lg:text-2xl rounded-full border-2 border-aquamarine-border shadow-lg hover:bg-aquamarine-bg hover:text-white transition-colors duration-300">
                            CONTATO
                        </button>
                    </a>
                    <nav className="bg-aquamarine-bg absolute left-0 top-[80%] w-52 h-20 flex justify-center items-center shadow-lg rounded-r-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2" />
                        </svg>
                        <h1 className="text-white text-lg lg:text-xl">Formosa</h1>
                    </nav>
                </div>

                <div id="right-div" className="bg-aquamarine-bg w-1/3 h-full flex justify-center items-center">
                    <img id="image-right" src={Teste} alt="iconRight" className="w-[30%] absolute transform -translate-x-1/2 pointer-events-none z-30 4xl:w-1/4 " />
                </div>
            </section>
            
        </header>

        
    )
}
