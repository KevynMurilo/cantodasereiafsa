import React from "react";
import imageAbout from "../../assets/about.png";

const About = () => {
    return (
        <>
            {/* MOBILE */}
            <section id="about" className="lg:hidden mt-20 flex flex-col items-center justify-center px-5">
                <div className="w-full flex items-center justify-center overflow-x-hidden">
                    <img src={imageAbout} className="imagemHeaderMobile w-96 h-auto pointer-events-none" alt="about" loading="lazy"/>
                </div>
                <div className="flex items-center justify-center h-0.5 bg-black mt-10 w-[90%]"></div>
                <div className="textoBottomMobile mt-10">
                    <h1 className="text-3xl font-light">Conheça nossa <span className="text-aquamarine-text " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>história</span></h1>
                    <p className="text-lg w-full mt-5 ">
                        <span className="text-3xl font-medium">L</span>ocalizado às margens da deslumbrante Lagoa Feia de Formosa, o Restaurante Canto da Sereia oferece uma experiência gastronômica única e inesquecível. Com um cardápio diversificado, repleto de pratos deliciosos como camarão fresco e acarajé, além de uma seleção de drinks refrescantes, nosso restaurante é o lugar ideal para desfrutar de momentos especiais com amigos e familiares.
                        <br /><br />
                        Venha nos visitar e deixe-se encantar pela combinação perfeita de comida de qualidade e paisagem deslumbrante.
                    </p>
                    <div className="flex mt-8">
                        <h2 className="text-3xl" style={{ fontFamily: "Great Vibes, cursive" }}>CantoDaSereia</h2>
                    </div>
                </div>
            </section>

            {/* DESKTOP */}
            <section id="aboutD" className="hidden lg:flex w-full mx-auto h-[790px] container max-w-[2500px]">
                <div className="flex items-center mx-auto">
                    <div className="imagemHeaderDesktop w-1/2 flex items-center justify-end px-20">
                        <img src={imageAbout} className="w-[500px] h-[500px] object-cover shadow-lg" alt="Imagem sobre nós" />
                    </div>
                    <div className="w-0.5 h-[550px] bg-black"></div>
                    <div className="textoRightDesktop  w-1/2 flex flex-col items-start justify-center px-20">
                        <h1 className="text-4xl mb-6" >Conheça nossa <span className="text-aquamarine-text " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>história</span></h1>
                        <p className="text-lg w-full overflow-hidden overflow-y-auto" style={{ maxHeight: 300, maxWidth: '80%' }}>
                            <span className="text-3xl font-bold">L</span>ocalizado às margens da deslumbrante Lagoa Feia de Formosa, o Restaurante Canto da Sereia oferece uma experiência gastronômica única e inesquecível. Com um cardápio diversificado, repleto de pratos deliciosos como camarão fresco e acarajé, além de uma seleção de drinks refrescantes, nosso restaurante é o lugar ideal para desfrutar de momentos especiais com amigos e familiares.
                            <br /><br />
                            Venha nos visitar e deixe-se encantar pela combinação perfeita de comida de qualidade e paisagem deslumbrante.
                        </p>
                        <div className="flex mt-8">
                            <h2 className="text-3xl" style={{ fontFamily: "Great Vibes, cursive" }}>CantoDaSereia</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default React.memo(About);
