import React from "react";
import "./animation.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import testeHeader from "../../assets/testeHeader.png";

const whatsappNumber = '5561981661974';

const Header = () => {
    // Pré-carregar a imagem assim que o componente for montado
    React.useEffect(() => {
        const img = new Image();
        img.src = testeHeader;
    }, []);

    return (
        <>
            {/* MOBILE */}
            <div className="flex flex-col pt-32 items-center justify-center bg-gradient-to-b from-aquamarine-bg to-white min-h-screen lg:flex-row lg:justify-center lg:items-center lg:text-center lg:hidden">
                <div className="headerItems flex flex-col justify-center items-center text-center px-5 lg:w-1/2 lg:items-start lg:text-start">
                    <h1 className="font-bold text-4xl mb-3">Comida de Qualidade</h1>
                    <p className="text-lg">
                        Desfrutar da experiência gastronômica excepcional no Restaurante Canto da Sereia é apreciar não só os sabores requintados, mas também a deslumbrante vista, criando um ambiente único e memorável.
                    </p>
                    <div className="flex mt-8 gap-1">
                        {[...Array(4)].map((_, index) => <AiFillStar key={index} className="w-6 h-6 text-gray-800" />)}
                        <AiOutlineStar className="w-6 h-6 text-gray-800" />
                        <h2 className="text-xl text-gray-800 font-bold pl-2">4.1</h2>
                    </div>
                    <div className="mt-10">
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                            <button className="w-48 h-14 bg-white rounded-full font-bold text-gray-800 text-lg hover:bg-gray-200 transition-colors duration-300 ease-in-out shadow-xl">
                                CONTATO
                            </button>
                        </a>
                    </div>
                </div>
                <div className="rotate-image flex justify-center items-center mx-auto mt-10 lg:w-1/2 lg:mt-0" style={{ width: "70%" }}>
                    <img src={testeHeader} className="prato w-96 h-auto object-cover" alt="imagem" width="1000" height="500" loading="lazy" />
                </div>
            </div>

            {/* DESKTOP */}
            <div id="headerD" className="hidden lg:flex items-center bg-gradient-to-b from-aquamarine-bg to-white px-20 h-screen w-full">
                <div className="container mx-auto flex">
                    <div className="headerItems flex flex-col justify-center w-[50%] mx-auto mt-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        <h1 className="font-bold text-black text-6xl mb-3">Comida de Qualidade</h1>
                        <p className="text-lg w-[500px] leading-relaxed">Desfrutar da experiência gastronômica excepcional no Restaurante Canto da Sereia é apreciar não só os sabores requintados, mas também a deslumbrante vista, criando um ambiente único e memorável.</p>
                        <div className="flex mt-5 gap-1">
                            {[...Array(4)].map((_, index) => <AiFillStar key={index} className="w-6 h-6 text-gray-800" />)}
                            <AiOutlineStar className="w-6 h-6 text-gray-800" />
                            <h2 className="text-xl text-gray-800 font-bold pl-2">4.1</h2>
                        </div>
                        <div className="mt-10">
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <button className="w-48 h-14 bg-white rounded-full font-bold text-gray-800 text-lg hover:bg-gray-200 transition-colors duration-300 ease-in-out shadow-xl" style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                                    CONTATO
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="rotate-image flex justify-center items-center">
                        <img src={testeHeader} className="w-[80%] h-auto object-cover" alt="imagem"  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Header);
