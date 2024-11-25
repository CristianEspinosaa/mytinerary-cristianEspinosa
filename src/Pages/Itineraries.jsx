import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItineraryCard from '../Components/ItinerariCard.jsx';
import fetchCities from '../data/cities.jsx';
import Navbar from '../Components/NavBar.jsx';

const Itineraries = () => {
  const location = useLocation();
  const { city } = location.state || {}; 
  const [itineraries, setItineraries] = useState([]);
  
  useEffect(() => {
    const getItineraries = async () => {
      if (city) {
        try {
          const citiesData = await fetchCities(city.name);
          
          const selectedCity = citiesData.find(c => c.name === city.name);

          if (selectedCity && selectedCity.itineraries) {
            setItineraries(selectedCity.itineraries);
          }
        } catch (error) {
          console.error("Error fetching itineraries:", error);
        }
      }
    };
    getItineraries();
  }, [city]);

  if (!city) {
    return <p>No city data available</p>;
  }
  console.log(city.itinerarie);

  return (
    <div>
      <Navbar/>
      <div
        className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center p-4"
        style={{ backgroundImage: `url(${city.image || 'https://source.unsplash.com/random/1920x1080/?city'})` }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{city.name}</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center">{city.description}</p>
      </div>

      <div className="p-16 space-y-16">
            <ItineraryCard key={city.id} cityData={city.itinerarie} />
      </div>
    </div>
  );
};

export default Itineraries;
