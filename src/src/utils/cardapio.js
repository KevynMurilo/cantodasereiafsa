// MenuIframe.js
import React from 'react';
import cardapioPdf from '../assets/cardapio.pdf';

const MenuIframe = () => {
  return (
    <iframe
      title="Cardápio"
      src={cardapioPdf}
      style={{ border: 'none', width: '100%', height: '100vh' }}
    />
  );
};

export default MenuIframe;
