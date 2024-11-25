// src/components/ItineraryCard.js
import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaDollarSign, FaClock } from 'react-icons/fa';

function ItineraryCard({ cityData }) {
  const [likes, setLikes] = useState(cityData.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-slate-400 rounded-lg shadow-lg overflow-hidden p-4 bg-[url('https://admin.taiwan.net.tw/UserFiles/solution/guowaixuzhi_01.jpg')] bg-cover bg-center"> 
      <div className="flex items-center space-x-4">
        <img
          src={cityData.photo}
          alt={cityData.name}
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-xl font-bold">Marta</h2>
      </div>

      <h3 className="mt-4 text-center text-[3rem] font-mono text-black">{cityData.name}</h3>

      <div className="mt-4 flex justify-between items-center text-gray-700">
        <div className="flex items-center space-x-1">
          <span className="font-semibold">Precio:</span>
          {Array.from({ length: cityData.price }).map((_, index) => (
            <FaDollarSign key={index} className="text-yellow-500" />
          ))}
        </div>
        <div className="text-white flex items-center space-x-2">
          <FaClock />
          <span>{cityData.duration} horas</span>
        </div>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <button onClick={handleLike} className="flex items-center">
          {likes > 0 ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          <span className="ml-1">{likes} Likes</span>
        </button>
      </div>

      <div className="mt-4 space-x-2">
        {cityData.hashtags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-500 text-sm px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ItineraryCard;
