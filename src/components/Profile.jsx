import { useState, useEffect } from 'react';
import './Profile.css';

const Profile = ({ onReturnHome }) => {
  // User state
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    avatar: '👤',
    favoriteRestaurants: []
  });

  // Available avatars
  const avatars = ['👨', '👩', '🧔', '👨‍🦳', '👩‍🦰', '👨‍💼', '👩‍🍳', '👨‍🎓', '👩‍⚕️'];
  
  // Restaurant data state
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch restaurants from API
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://restaurant-api-hur7.onrender.com/restaurants');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarSelect = (avatar) => {
    setProfile(prev => ({ ...prev, avatar }));
  };

  const handleRestaurantToggle = (restaurantId) => {
    setProfile(prev => {
      const exists = prev.favoriteRestaurants.some(r => r.id === restaurantId);
      const restaurant = restaurants.find(r => r.id === restaurantId);
      
      return {
        ...prev,
        favoriteRestaurants: exists
          ? prev.favoriteRestaurants.filter(r => r.id !== restaurantId)
          : [...prev.favoriteRestaurants, restaurant]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile saved!\nName: ${profile.name}\nFavorites: ${profile.favoriteRestaurants.length}`);
    // In a real app, you would POST to your API here
  };

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="profile-container">
      <button onClick={onReturnHome} className="back-button">
        ← Back to Home
      </button>

      <div className="profile-content">
        <form onSubmit={handleSubmit} className="profile-form">
          <h2>Your Profile</h2>
          
          <div className="avatar-section">
            <h3>Select Avatar:</h3>
            <div className="avatar-grid">
              {avatars.map(avatar => (
                <div
                  key={avatar}
                  className={`avatar-option ${profile.avatar === avatar ? 'selected' : ''}`}
                  onClick={() => handleAvatarSelect(avatar)}
                >
                  {avatar}
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>Favorite Restaurants:</label>
            {loading ? (
              <p>Loading restaurants...</p>
            ) : (
              <div className="restaurant-checkboxes">
                {restaurants.map(restaurant => (
                  <label key={restaurant.id} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={profile.favoriteRestaurants.some(r => r.id === restaurant.id)}
                      onChange={() => handleRestaurantToggle(restaurant.id)}
                    />
                    <span>{restaurant.name} ({restaurant.cuisines.join(', ')})</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className="save-button">
            Save Profile
          </button>
        </form>

        {profile.name && (
          <div className="profile-preview">
            <div className="preview-header">
              <span className="avatar-large">{profile.avatar}</span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
              </div>
            </div>
            
            {profile.favoriteRestaurants.length > 0 && (
              <div className="favorites-section">
                <h4>Your Favorites:</h4>
                <ul>
                  {profile.favoriteRestaurants.map(r => (
                    <li key={r.id}>
                      <strong>{r.name}</strong> - {r.cuisines.join(', ')}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;