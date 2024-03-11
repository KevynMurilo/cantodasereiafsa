import React, { memo } from "react";
import imageMenu from "../../assets/menu.png";
import pdf from "../../assets/cardapio.pdf";

const Menu = () => {
    const handleOpenMenu = () => {
        window.open(pdf, "_blank");
    };

    return (
        <>
            {/* MENU MOBILE */}
            <section id="menuu" className="container-fluid overflow-x-hidden mt-24 px-5 lg:hidden">
                <div className="flex flex-col justify-center items-center mb-10">
                    <span className='w-1/2 h-0.5 bg-black flex justify-center items-center'></span>
                    <h1 className="text-3xl font-light mt-5">MENU</h1>
                </div>

                <div className="itemsLeftMobile row">
                    {/* Textos no topo */}
                    <div className="col text-start mb-10">
                        <h2 className="text-2xl font-medium">Drinks</h2>
                        <p className="text-lg">Experimente nossos cocktails artesanais e clássicos, preparados com maestria para agradar o paladar mais exigente.</p>
                    </div>
                    <div className="col text-start mb-10">
                        <h2 className="text-2xl font-medium">Petiscos</h2>
                        <p className="text-lg">Desfrute de uma variedade de deliciosos aperitivos enquanto aprecia a vista deslumbrante da lagoa.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* Imagem no meio */}
                    <div className="imageCenterMobile col-auto flex justify-center items-center">
                        <img src={imageMenu} alt="Imagem" className="img-fluid w-96" style={{ maxWidth: '100%' }} loading="lazy"/>
                    </div>
                </div>
                <div className="itemsRightMobile row">
                    {/* Textos abaixo da imagem */}
                    <div className="col text-right mb-10">
                        <h2 className="text-2xl font-medium">Refeições</h2>
                        <p className="text-lg">Descubra pratos autênticos que destacam os sabores regionais e proporcionam uma experiência gastronômica única.</p>
                    </div>
                    <div className="col text-right mb-10">
                        <h2 className="text-2xl font-medium">Entretenimento</h2>
                        <p className="text-lg">Aproveite nossas emocionantes apresentações musicais ao vivo para tornar sua visita ainda mais especial, memorável e envolvente.</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-20 mb-10">
                    <button onClick={handleOpenMenu} className="text-lg font-bold text-shadow-xl px-6 py-4 bg-aquamarine-bg rounded-lg shadow-lg hover:bg-aquamarine2-bg transition duration-300 ease-in-out transform hover:scale-105 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                        Abrir Menu
                    </button>
                </div>
            </section>

            {/* MENU DESKTOP */}
            <section id="menuuD" className="hidden lg:flex flex-col mx-auto px-20 mt-20 py-2 container max-w-[2500px]">
                <div className="flex flex-col justify-center items-center mt-8  mb-20">
                    <span className='w-28 h-0.5 mb-8 bg-black flex justify-center items-center'></span>
                    <h1 className="text-4xl">MENU</h1>
                </div>

                <div className="flex justify-between items-center">
                    {/* Texto no topo esquerdo */}
                    <div className="itemsLeftDesktop text-left flex flex-col justify-center gap-44" style={{ width: '20%' }}>
                        <div className="">
                            <h2 className="text-2xl font-bold">Drinks</h2>
                            <p className="text-lg">Experimente os deliciosos nossos cocktails artesanais e clássicos, preparados com maestria para agradar o paladar mais exigente.</p>
                        </div>
                        <div className="italic">
                            <h2 className="text-2xl font-bold">Petiscos</h2>
                            <p className="text-lg"> Desfrute de uma ampla seleção e diversidade de deliciosos aperitivos enquanto relaxa e aprecia a vista deslumbrante e serena da lagoa.</p>
                        </div>
                    </div>

                    {/* Imagem no meio */}
                    <img src={imageMenu} alt="Imagem" className="imagemCenterDesktop object-cover rounded-full" style={{ width: 500, height: 500 }} loading="lazy"/>

                    {/* Texto no topo e em baixo do lado direito */}
                    <div className="itemsRightDesktop  text-right flex flex-col justify-center gap-44" style={{ width: '20%'}}>
                        <div className="">
                            <h2 className="text-2xl font-bold">Refeições</h2>
                            <p className="text-lg">Descubra pratos autênticos que destacam os sabores regionais e proporcionam uma experiência gastronômica única.</p>
                        </div>
                        <div className="italic">
                            <h2 className="text-2xl font-bold">Entretenimento</h2>
                            <p className="text-lg">Aproveite nossas emocionantes apresentações musicais ao vivo para tornar sua visita ainda mais especial, memorável e envolvente.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-20 mb-10">
                    <button onClick={handleOpenMenu} className="text-lg font-bold text-white px-6 py-4 bg-aquamarine-bg rounded-lg shadow-lg hover:bg-aquamarine2-bg transition duration-300 ease-in-out transform hover:scale-105 text-shadow-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                        Abrir Menu
                    </button>
                </div>
            </section>
        </>
    )
}

export default memo(Menu);
