// src/components/Cities.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import fetchCities from '../data/cities.jsx';
import CitiesSearch from "./SearchCities.jsx";

function Cities() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCities = async () => {
      const data = await fetchCities(search);
      setCities(data);
    };

    getCities();
  }, [search]);

  const handleSearch = (term) => {
    setSearch(term);
  };

  const viewMore = (city) => {
    navigate("/itineraries", { state: { city } });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://wallpapers.com/images/hd/best-travel-background-3840-x-2400-qn5cnb33w49o9p56.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 text-white text-center py-24">
          <h1 className="text-4xl font-bold">Cities</h1>
          <p className="text-lg mt-2">Collection of the most beautiful places and experiences</p>
        </div>
      </header>
      <CitiesSearch onSearch={handleSearch} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={city.image} alt={city.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{city.name}</h2>
                <p className="text-gray-400">{city.country}</p>
                <button 
                  onClick={() => viewMore(city)} 
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;
