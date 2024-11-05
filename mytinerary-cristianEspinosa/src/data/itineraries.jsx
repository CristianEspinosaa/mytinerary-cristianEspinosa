const fetchItineraries = async () => { 
    try {
      const response = await fetch(`http://localhost:8080/api/itineraries/all`);
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
  
  export default fetchItineraries;
  