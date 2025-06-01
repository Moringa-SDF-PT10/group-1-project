import { useEffect, useState } from "react";
import Restaurant from "./components/Restaurant";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const handleRemove = (id) => {
    const updatedFavorites = favorites.filter((r) => r.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <p>You have no favorite restaurants yet.</p>;
  }

  return (
    <div className="favorites-list">
      {favorites.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          {...restaurant}
          onRemove={() => handleRemove(restaurant.id)}
        />
      ))}
    </div>
  );
}

export default Favorites