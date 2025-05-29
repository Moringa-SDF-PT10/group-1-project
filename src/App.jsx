import { useEffect, useState } from 'react';
import './App.css';
import RestaurantLists from './components/RestaurantList';


function App() {
const[restaurantData, setRestaurantData] = useState([])
const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/restaurants')
      .then(r => r.json())
      .then(data => setRestaurantData(data));
  }, []);

  return (
    <div>
     (
         <RestaurantLists
          restaurants={restaurantData}
          onView={setSelectedRestaurant} 
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      )
    </div>
  );
}

export default App;
