import React from "react";
import { Link } from "react-router-dom";
function Restaurant({ name, address, cuisine, ratings,hours, reviews, image, id}) {

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


        {reviews.map(reviews=>(
            <li key={reviews} className="restaurant-reviews">{reviews}</li>
        ))}

         <Link to={`/Restaurants/${id}`} className="restaurant-button">
          View Restaurant
        </Link>
      </div>
    </div>
  );
}

export default Restaurant;