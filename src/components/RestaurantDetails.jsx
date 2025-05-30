function RestaurantDetails({ restaurant }) {
  return (
    <div className="restaurant-details">
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} />
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Rating:</strong> {restaurant.ratings}</p>
      <p><strong>Hours:</strong> {restaurant.hours}</p>
      <p><strong>Reviews:</strong> {restaurant.reviews}</p>

      {restaurant.menu && restaurant.menu.length > 0 && (
        <div className="menu-section">
          <h3>Menu</h3>
          {restaurant.menu.map((cat, idx) => (
            <div key={idx}>
              <h4>{cat.category}</h4>
              <ul>
                {cat.foods.map((food, i) => (
                  <li key={i}>{food}</li>
                ))}
              </ul>
              <img src={cat.image} alt={cat.category} className='menu-img'/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantDetails;
