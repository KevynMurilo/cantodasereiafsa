import React, { useState, useEffect, useRef } from "react";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";
import iconLogoMobile from "../../assets/iconMobile.png";
import iconLogoDesktop from "../../assets/icon.webp";

export default function NavBar2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const whatsappNumber = '5561981661974';

    return (
        <>
            {/* MOBILE */}
            <nav className="w-screen flex items-center justify-between pt-5 px-4 absolute top-0 lg:hidden" style={{ zIndex: 99 }}>
                <img src={iconLogoMobile} alt="iconLogoMobile" className="w-16 h-auto" width="100" height="100" loading="lazy" />
                <FiAlignJustify
                    className="text-white text-4xl sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl cursor-pointer"
                    onClick={toggleMenu}
                />
                {menuOpen && (
                    <div ref={menuRef} className="absolute top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-lg" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <ul className="flex flex-col items-center">
                        <li className="my-2">
                            <a href="#about" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Sobre</a>
                        </li>
                        <li className="my-2">
                            <a href="#specialties" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Especialidades</a>
                        </li>
                        <li className="my-2">
                            <a href="#menuu" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Menu</a>
                        </li>
                        <li className="my-2">
                            <a href="#moment" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Momento</a>
                        </li>
                        <li className="my-2">
                            <a href="#location" className="text-lg hover:text-gray-400 transition-colors duration-300" onClick={handleItemClick}>Localização</a>
                        </li>
                        <div className="flex justify-around mt-6 gap-6">
                            <a href="https://www.instagram.com/cantodasereia_lagoafeia/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-white text-3xl hover:text-gray-400 transition-colors duration-300 cursor-pointer" />
                            </a>
                        </div>
                    </ul>
                    </div>
                )}
            </nav>


            {/* DESKTOP */}
            <div className="hidden lg:flex lg:w-full right-0 h-16 fixed top-5 z-40">
                <div className="lg:w-1/12 bg-white absolute top-0 left-20 h-full flex items-center justify-center rounded-xl" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ fontFamily: 'Roboto, sans-serif' }} >
                        <img src={iconLogoDesktop} alt="Logo" className="h-16" loading="lazy"/>
                    </div>
                </div>

                <div className="lg-full bg-white absolute top-0 right-0 h-full flex justify-center items-center " style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
                        <ul className="flex space-x-8 pl-10">
                            <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                                <a href="#headerD" className="text-black text-lg hover:text-aquamarine-text">Inicio</a>
                            </li>
                            <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                                <a href="#aboutD" className="text-black text-lg hover:text-aquamarine-text">Sobre</a>
                            </li>
                            <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                                <a href="#specialtiesD" className="text-black text-lg hover:text-aquamarine-text">Especialidades</a>
                            </li>
                            <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                                <a href="#menuuD" className="text-black text-lg hover:text-aquamarine-text">Menu</a>
                            </li>
                            <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                                <a href="#moment" className="text-black text-lg hover:text-aquamarine-text">Momento</a>
                            </li>
                            <li className="cursor-pointer text-lg hover:text-aquamarine-text">
                                <a href="#locationD" className="text-black text-lg hover:text-aquamarine-text">Localização</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center pl-10 gap-2 pr-4">
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                            <AiOutlineWhatsApp className="text-3xl mx-4 cursor-pointer text-black" />
                        </a>

                        <a href="https://www.instagram.com/cantodasereia_lagoafeia/" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram className="text-3xl mx-4 cursor-pointer text-black" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
