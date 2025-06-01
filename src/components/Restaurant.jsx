import React from "react";
import { Link } from "react-router-dom";
import Favourite from './FavouriteList';
function Restaurant({ name, address, cuisine, ratings,hours, reviews, image, id,isFavourite,onToggleFavourite}) {

  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <div className="restaurant-content">
        <h3 className="restaurant-name">{name}</h3>
         <div className="favourite-button-container">
          <Favourite isFavourite={isFavourite} onToggle={onToggleFavourite} />
        </div>
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