import React, { useState } from "react";

const CitiesSearch = ({ onSearch }) => { 
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search cities..."
          value={search} 
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default CitiesSearch;
