import React from 'react';

export default function Map() {
    return (
        <>
            <div className='hidden lg:flex ' style={{ width: '80%', height: '100%' }}>
                <iframe
                    title="Localização"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2848209272796!2d-47.30723729999999!3d-15.571320599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a32f3ad4d1ff%3A0x7184310181f49321!2sCANTO%20DA%20SEREIA%20-%20Lounge%20Bar%20%26%20Restaurante!5e0!3m2!1sen!2sbr!4v1645217222516!5m2!1sen!2sbr"
                    loading="lazy"
                ></iframe>
            </div>

            <div className='lg:hidden ' style={{ width: '100%', height: '100%' }}>
                <iframe
                    title="Localização"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2848209272796!2d-47.30723729999999!3d-15.571320599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a32f3ad4d1ff%3A0x7184310181f49321!2sCANTO%20DA%20SEREIA%20-%20Lounge%20Bar%20%26%20Restaurante!5e0!3m2!1sen!2sbr!4v1645217222516!5m2!1sen!2sbr"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
}
