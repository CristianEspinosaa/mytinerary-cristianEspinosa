import React, { useEffect, useState } from 'react';
import '../App.css'; 


const images = [
  'https://img.freepik.com/foto-gratis/hermosa-chica-pie-barco-mirando-montanas-presa-ratchaprapha-parque-nacional-khao-sok-provincia-surat-thani-tailandia_335224-849.jpg',
  'https://img.freepik.com/fotos-premium/turistas-exploran-machu-picchu-fondo-caliente_1103100-92737.jpg?size=626&ext=jpg&uid=R167217438&ga=GA1.1.852905467.1715119832&semt=ais_hybrid',
  'https://img.freepik.com/fotos-premium/hermoso-mar-puente_1205263-105362.jpg?size=626&ext=jpg&ga=GA1.2.852905467.1715119832&semt=ais_hybrid',
  'https://img.freepik.com/foto-gratis/retrato-anciano-dispositivo-camara-celebracion-dia-mundial-fotografia_23-2151657219.jpg?size=626&ext=jpg&uid=R167217438&ga=GA1.1.852905467.1715119832&semt=ais_hybrid'
];

const ImgCarusel = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prev => {
        const currentIndex = images.indexOf(prev);
        return images[(currentIndex + 1) % images.length];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="pin flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
    </div>
  );
}

export default ImgCarusel;
