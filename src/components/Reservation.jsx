import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Reservation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restaurant: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [restaurants, setRestaurants] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('https://restaurant-api-hur7.onrender.com/restaurants')
      .then(res => res.json())
      .then(data => setRestaurants(data))
      .catch(err => console.error('Failed to fetch restaurants:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation Booked');
    setSubmitted(true);
  };

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      </div>

      <div className="reservation-container">
        <h2>Make a Reservation</h2>

        {submitted ? (
          <div className="confirmation">
            <h3>Thank you, {formData.name}!</h3>
            <p>
              Your reservation at <strong>{formData.restaurant}</strong> for <strong>{formData.guests}</strong> guest(s)
              on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> is confirmed.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reservation-form">
            <label>
              Select Restaurant
              <select
                name="restaurant"
                value={formData.restaurant}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a restaurant</option>
                {restaurants.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Date
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </label>

            <label>
              Time
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </label>

            <label>
              Number of guests
              <input
                type="number"
                name="guests"
                min="1"
                max="20"
                required
                value={formData.guests}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Reserve</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Reservation;
