import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function RestaurantLists() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://restaurant-api-hur7.onrender.com/restaurants')
      .then((r) => r.json())
      .then((data) => {
        setRestaurantData(data);
        setFilteredRestaurants(data);
      });
  }, []);

  const handleSearch = (query) => {
    const results = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRestaurants(results);
  };

  return (
    <>
    <div>
    <SearchBar onSearch={handleSearch} />
    </div>
    <div className="restaurant-grid">
      {filteredRestaurants.map((restaurant) => (
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

