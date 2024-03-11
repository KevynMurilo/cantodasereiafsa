import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-aquamarine-bg text-white py-6 px-8 text-center w-full h-auto">
      <div className="md:flex justify-between items-center">
        <p className="md:text-left">&copy; {new Date().getFullYear()} Canto da Sereia. Todos os direitos reservados.</p>
        <div className="flex justify-center mt-4 md:mt-0">
          <a href="https://www.instagram.com/seu_instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ margin: '0 10px', fontSize: '30px', color: 'white' }} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=seu_numero_de_whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ margin: '0 10px', fontSize: '30px', color: 'white' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
