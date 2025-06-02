import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

function Trending() {
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  useEffect(() => {
    fetch("https://restaurant-api-hur7.onrender.com/restaurants")
      .then((r) => r.json())
      .then((data) => {
        if (data.length > 0) {
          const random = data[Math.floor(Math.random() * data.length)];
          setRandomRestaurant(random);
        }
      });
  }, []);

  return (
    <div className="page-container">
      <h1>🔥 Trending Restaurant</h1>
      <p>Check out this hot spot in town!</p>

      {randomRestaurant ? (
        <Restaurant
          id={randomRestaurant.id}
          name={randomRestaurant.name}
          address={randomRestaurant.address}
          cuisine={randomRestaurant.cuisine}
          ratings={randomRestaurant.ratings}
          menu={randomRestaurant.menu}
          hours={randomRestaurant.hours}
          reviews={randomRestaurant.reviews}
          image={randomRestaurant.image}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Trending;
