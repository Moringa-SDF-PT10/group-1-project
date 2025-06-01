import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`https://restaurant-api-hur7.onrender.com/restaurants/${id}`)
      .then((r) => r.json())
      .then((data) => setRestaurant(data));
  }, [id]);

  const handleAddToFavorites = () => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorited = existing.some((r) => r.id === restaurant.id);
    if (!isAlreadyFavorited) {
      localStorage.setItem("favorites", JSON.stringify([...existing, restaurant]));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites");
    }
  };

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="restaurant-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-main-image" />
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Cuisine:</strong> {restaurant.cuisines.join(", ")}</p>
      <p><strong>Rating:</strong> {restaurant.rating} ⭐</p>
      <p><strong>Hours:</strong> {restaurant.hours}</p>

      <button onClick={handleAddToFavorites} className="add-favorite-btn">❤️ Add to Favorites</button>

      <h3>Menu</h3>
      <div className="menu-cards-container">
        {restaurant.menu.map((category, index) => (
          <div key={index} className="menu-card">
            <img src={category.image} alt={category.category} className="menu-card-image" />
            <h4>{category.category}</h4>
            <ul>
              {category.foods.map((food, idx) => (
                <li key={idx}>{food}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3>Reviews</h3>
      <ul className="reviews-list">
        {restaurant.reviews.map((review, i) => (
          <li key={i}>{review}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantDetail;