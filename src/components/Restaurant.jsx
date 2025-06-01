import React, { useState } from "react";
import { Link } from "react-router-dom";

function Restaurant({ name, address, cuisine, ratings, hours, reviews, image, id, onAddReview }) {
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      onAddReview(id, newReview);
      setNewReview("");
    }
  };

  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <div className="restaurant-content">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-address">{address}</p>
        <p className="restaurant-cuisine">{cuisine}</p>

        <div className="restaurant-info">
          <span className="restaurant-rating">⭐ {ratings}</span>
          <span className="restaurant-hours">{hours}</span>
        </div>

        <ul className="restaurant-reviews">
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Add a review..."
          />
          <button type="submit" className="restaurant-button">
            Submit Review
          </button>
        </form>

        <Link to={`/Restaurants/${id}`} className="restaurant-button">
          View Restaurant
        </Link>
      </div>
    </div>
  );
}

export default Restaurant;