import { useEffect, useState } from 'react';
import './App.css';
import RestaurantLists from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/restaurants')
      .then(r => r.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <div>
      {selectedRestaurant ? (
        <>
          <button onClick={() => setSelectedRestaurant(null)}>Back to All</button>
          <RestaurantDetails restaurant={selectedRestaurant} />
        </>
      ) : (
        <RestaurantLists
          restaurants={restaurants}
          onView={setSelectedRestaurant} 
        />
      )}
    </div>
  );
}

export default App;
