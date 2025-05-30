import Restaurant from './Restaurant';
import RestaurantDetails from './RestaurantDetails';

function RestaurantLists({ restaurants,onView,selectedRestaurant,setSelectedRestaurant }) {
  console.log(restaurants)
  return (
    <div className='restaurant-card'>
      <h2>Welcome Message</h2>
      {selectedRestaurant ? (
        <>
          <button onClick={() => setSelectedRestaurant(null)}>Back to All</button>
          <RestaurantDetails restaurant={selectedRestaurant} />
        </>
      ) :
      (restaurants.map((restaurant) => (
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
          onView={() => onView(restaurant)}
        />
      )))}
    </div>
  );
}

export default RestaurantLists;
