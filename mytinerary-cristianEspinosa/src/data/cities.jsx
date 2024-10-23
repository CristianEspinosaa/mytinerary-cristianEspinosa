import CitiesSearch from '../Components/SearchCities.jsx'

const fetchCities = async (searchTerm) => { 
  try {
    const response = await fetch(`http://localhost:8080/api/cities/all?name=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const data = await response.json();
    return data.response;  
  } catch (error) {
    console.error('Error:', error);
    return [];  
  }
};

export default fetchCities;

  