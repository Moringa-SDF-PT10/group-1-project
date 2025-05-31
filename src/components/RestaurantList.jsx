import Restaurant from './Restaurant';
import { useState, useEffect } from 'react';

function RestaurantLists() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetch('https://restaurant-api-hur7.onrender.com/restaurants')
      .then(r => r.json())
      .then(data => setRestaurantData(data));
  }, []);

  return (
    <div className="restaurant-grid">
      {restaurantData.map((restaurant) => (
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
  );
}

export default RestaurantLists;