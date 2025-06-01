import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: '👤',
    favoriteRestaurants: [],
    ratings: {}
  });

  const avatars = [
    { emoji: '👨', label: 'Man' },
    { emoji: '👩', label: 'Woman' },
    { emoji: '🧔', label: 'Bearded person' },
    { emoji: '👨‍🦳', label: 'Older man' },
    { emoji: '👩‍🦰', label: 'Red-haired woman' }
  ];
  
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  const fetchRestaurants = useCallback(async () => {
    try {
      const response = await fetch('https://restaurant-api-hur7.onrender.com/restaurants');
      if (!response.ok) throw new Error('Failed to fetch restaurants');
      const data = await response.json();
      setRestaurants(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarSelect = (avatar) => {
    setProfile(prev => ({ ...prev, avatar }));
  };

  const handleAddRestaurant = () => {
    if (!selectedRestaurant) return;
    
    const restaurant = restaurants.find(r => r.id === Number(selectedRestaurant));
    if (
        !restaurant ||
        profile.favoriteRestaurants.some(r => r.id === Number(selectedRestaurant))
      )  return;
    
    setProfile(prev => ({
      ...prev,
      favoriteRestaurants: [...prev.favoriteRestaurants, restaurant],
      ratings: { ...prev.ratings, [selectedRestaurant]: 5 } // Default 3 stars
    }));
    
    setSelectedRestaurant('');
  };

  const handleRatingChange = (restaurantId, rating) => {
    setProfile(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [restaurantId]: rating }
    }));
  };

  const handleRemoveRestaurant = (restaurantId) => {
    setProfile(prev => ({
      ...prev,
      favoriteRestaurants: prev.favoriteRestaurants.filter(r => r.id !== restaurantId),
      ratings: Object.fromEntries(
        Object.entries(prev.ratings).filter(([id]) => id !== restaurantId)
      )
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Profile saved:', profile);
      alert('Profile saved successfully!');
    } catch (err) {
      setError('Failed to save profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error) return <div className="error-state">{error}</div>;

  return (
    <div className="profile-container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Home
      </button>

      <div className="profile-content">
        <form onSubmit={handleSubmit} className="profile-form">
          <h1 className="form-title">Create Your Profile</h1>
          
          <div className="avatar-section">
            <h3 className="section-title">Select Avatar</h3>
            <div className="avatar-grid">
              {avatars.map(({ emoji, label }) => (
                <button
                  key={label}
                  type="button"
                  className={`avatar-option ${profile.avatar === emoji ? 'selected' : ''}`}
                  onClick={() => handleAvatarSelect(emoji)}
                  aria-label={label}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              placeholder="+1234567890"
              pattern="[+][0-9]{11,14}"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="restaurant-select">Add Favorite Restaurant</label>
            <div className="restaurant-select-container">
              <select
                id="restaurant-select"
                value={selectedRestaurant}
                onChange={(e) => setSelectedRestaurant(e.target.value)}
                disabled={loading}
              >
                <option value="">Select a restaurant</option>
                {restaurants.map(restaurant => (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddRestaurant}
                className="add-button"
                disabled={!selectedRestaurant}
              >
                Add
              </button>
            </div>
          </div>

          <button type="submit" className="save-button" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Profile'}
          </button>
        </form>

        {profile.name && (
          <div className="profile-preview">
            <div className="preview-header">
              <span className="avatar-large">{profile.avatar}</span>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
            </div>
            
            {profile.favoriteRestaurants.length > 0 && (
              <div className="favorites-section">
                <h4>Your Favorites</h4>
                <div className="favorites-grid">
                  {profile.favoriteRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="restaurant-card">
                      <div className="restaurant-image-container">
                        {restaurant.image ? (
                          <img 
                            src={restaurant.image} 
                            alt={restaurant.name} 
                            className="restaurant-image"
                          />
                        ) : (
                          <div className="image-placeholder">No Image</div>
                        )}
                      </div>
                      <div className="restaurant-info">
                        <h5>{restaurant.name}</h5>
                        <p>{restaurant.cuisines?.join(', ')}</p>
                        <div className="rating-section">
                          {[1, 2, 3, 4, 5].map(star => (
                            <span
                              key={star}
                              className={`star ${star <= (profile.ratings[restaurant.id] || 0) ? 'filled' : ''}`}
                              onClick={() => handleRatingChange(restaurant.id, star)}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveRestaurant(restaurant.id)}
                        className="remove-button"
                        aria-label={`Remove ${restaurant.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

