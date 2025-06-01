import { useState, useEffect } from 'react';
import Restaurant from './Restaurant';
// import Favourite from './FavouriteList';


function RestaurantLists() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  useEffect(() => {
    fetch('https://restaurant-api-hur7.onrender.com/restaurants')
      .then(r => r.json())
      .then(data => setRestaurantData(data));
  }, []);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const displayedRestaurants = showFavouritesOnly
    ? restaurantData.filter((r) => favourites.includes(r.id))
    : restaurantData;

  return (
    <div>
      <button onClick={() => setShowFavouritesOnly(!showFavouritesOnly)}>
        {showFavouritesOnly ? "Show All Restaurants" : "Show Favourites Only"}
      </button>

      <div className="restaurant-grid">
        {displayedRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
           <Restaurant
            key={restaurant.id}
            {...restaurant}
            isFavourite={favourites.includes(restaurant.id)}
            onToggleFavourite={() => toggleFavourite(restaurant.id)}
            />

          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantLists;
