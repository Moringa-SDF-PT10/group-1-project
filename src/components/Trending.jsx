import RestaurantLists from "./RestaurantList";
function Trending(){
  return (
    <div className="page-container">
      <h1>🔥 Trending Restaurants</h1>
      <p>Check out the most popular spots right now!</p>
      <RestaurantLists/>
    </div>
  );
};

export default Trending;
