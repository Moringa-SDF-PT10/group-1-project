import React from "react";
import { Link } from "react-router-dom";
function Restaurant({ name, address, cuisine, ratings,hours, reviews, image, id, onRemove}) {

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

        {reviews.map((review, idx) => (
          <li key={idx} className="restaurant-reviews">{review}</li>
        ))}

        <Link to={`/Restaurants/${id}`} className="restaurant-button">
          View Restaurant
        </Link>

        {onRemove && (
          <button
            onClick={onRemove}
            className="remove-favorite-button"
            type="button"
          >
            Remove from Favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default Restaurant;