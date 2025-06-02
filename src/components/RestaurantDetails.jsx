import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [newReview, setNewReview] = useState("");

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

  const handleSubmitReview = () => {
    if (!newReview.trim()) return;

    fetch(`https://restaurant-api-hur7.onrender.com/restaurants/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: newReview }),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to add review");
        return r.json();
      })
      .then((updatedRestaurant) => {
        setRestaurant(updatedRestaurant);
        setNewReview("");
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong while submitting your review.");
      });
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

      <h3>Add a Review</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitReview();
        }}
        className="review-form"
      >
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here"
          rows="4"
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default RestaurantDetail;