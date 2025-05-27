import Restaurant from './Restaurant';

function RestaurantLists({ restaurants }) {
  return (
    <div className='restaurant-card'>
      <h2>Welcome Message</h2>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          name={restaurant.name}
          address={restaurant.address}
          cuisine={restaurant.cuisine}
          ratings={restaurant.ratings}
          menu={restaurant.menu}
          hours={restaurant.hours}
          reviews={restaurant.reviews}
          image={restaurant.image}
        />
      ))}
    </div>
  );
}

export default RestaurantLists;
