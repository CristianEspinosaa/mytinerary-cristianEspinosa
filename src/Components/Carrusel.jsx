import React, { useState, useEffect } from 'react';


const carouselItems = [
  [
    { title: 'Tokio', image: 'https://viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg', likes: 13 },
    { title: 'Bogotá', image: 'https://blog.urbansa.co/hubfs/Centro%20de%20la%20ciudad%20-%20El%20centro%20de%20Bogot%C3%A1-Bogot%C3%A1%20de%20noche.jpg', likes: 13 },
    { title: 'Londres', image: 'https://viajes.nationalgeographic.com.es/medio/2023/03/24/big-ben-y-alrededores_852e28a7_475606798_230324072203_1280x841.jpg', likes: 10 },
    { title: 'Paris', image: 'https://media.gq.com.mx/photos/6539624920335183f3244843/master/pass/Mejor_e%CC%81poca_para_viajar_a_Pari%CC%81s.jpg', likes: 8 },
  ],
  [
    { title: 'Los Angeles', image: 'https://www.civitatis.com/f/estados-unidos/los-angeles/los-angeles.jpg', likes: 15 },
    { title: 'Pekin', image: 'https://comeamaviaja.com/wp-content/uploads/2017/11/que-ver-en-pekin.webp', likes: 12 },
    { title: 'Hong Kong', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTvPtsU6DIF9bnsjuF6tXHnoP2gw8yGSn9A&s', likes: 14 },
    { title: 'Chicago', image: 'https://cdn.choosechicago.com/uploads/2019/07/first-time-bean-1.jpg', likes: 9 },
  ],
  [
    { title: 'Moscu', image: 'https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg', likes: 16 },
    { title: 'Osaka', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf62J4OvU2U3R8WX7Wjp-bHoSs3hozrG0vXg&s', likes: 17 },
    { title: 'New York', image: 'https://hips.hearstapps.com/hmg-prod/images/nueva-york-1521191396.jpg', likes: 11},
    { title: 'Delhi', image: 'https://www.civitatis.com/blog/wp-content/uploads/2018/06/delhi.jpg', likes: 11 },
  ],
];

const Carrusel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  
  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + carouselItems.length) % carouselItems.length);
  };


  useEffect(() => {
    const interval = setInterval(handleNext, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10 px-4">
  <h2 className="text-black text-center text-3xl mb-5">Popular Itineraries</h2>


  <div className="flex flex-col md:flex-row gap-4">
    {carouselItems[currentPage].map((item, index) => (
      <div
        key={index}
        className="relative bg-black rounded-lg overflow-hidden shadow-lg w-full md:w-[600px]"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 md:h-52 object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-slate-700 text-white p-2 rounded-md text-sm md:text-base">
          {item.title}
        </div>
        <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full flex items-center text-sm md:text-base">
          <span className="mr-1">❤️</span> {item.likes}
        </div>
      </div>
    ))}
  </div>

  <button
    className="absolute left-2 md:-left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    onClick={handlePrev}
  >
    ←
  </button>
  <button
    className="absolute right-2 md:-right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    onClick={handleNext}
  >
    →
  </button>

  
  <div className="flex justify-center mt-4 space-x-2">
    {carouselItems.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${index === currentPage ? 'bg-white' : 'bg-gray-500'}`}
      />
    ))}
  </div>
</div>

  );
};

export default Carrusel;
