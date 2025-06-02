import { useState, useEffect } from 'react';
import Restaurant from './Restaurant';
import SearchBar from './SearchBar';

function RestaurantLists() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    fetch('https://restaurant-api-hur7.onrender.com/restaurants')
      .then(r => r.json())
      .then(data => {
        setRestaurantData(data);
        setFilteredData(data);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="restaurant-grid">
        {filteredData.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            address={restaurant.address}
            cuisine={restaurant.cuisine}
            ratings={restaurant.ratings}
            menu={restaurant.menu}
            hours={restaurant.hours}
            reviews={restaurant.reviews}
            image={restaurant.image}
          />
        ))}
      </div>
    </>
  );
}

export default RestaurantLists;
