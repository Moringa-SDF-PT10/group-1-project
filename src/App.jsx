import { useEffect, useState } from 'react';
import './index.css'
import RestaurantLists from './components/RestaurantList';
import NavBar1 from './components/NavBar1';


function App() {
const[restaurantData, setRestaurantData] = useState([])
const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetch('https://restaurant-api-hur7.onrender.com/restaurants')
      .then(r => r.json())
      .then(data => setRestaurantData(data));
  }, []);

  return (
    <div>
        <NavBar1/>
         <RestaurantLists
          restaurants={restaurantData}
          onView={setSelectedRestaurant}
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
        />
    </div>
  );
}

export default App;
