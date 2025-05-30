import { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import FavoriteRestaurants from './FavoriteRestaurants';
import AddRestaurant from './AddRestaurant';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const API_URL = "https://restaurant-api-hur7.onrender.com/restaurants";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setFavorites(data.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleAddRestaurant = async (newRestaurant) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRestaurant)
      });
      const data = await response.json();
      setFavorites([...favorites, data]);
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setFavorites(favorites.filter(restaurant => restaurant.id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="profile-container">
      <UserInfo name="John Doe" email="john@example.com" />
      <FavoriteRestaurants 
        restaurants={favorites} 
        onDelete={handleDelete} 
      />
      <AddRestaurant onAdd={handleAddRestaurant} />
    </div>
  );
};

export default Profile;