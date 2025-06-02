import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reservation() {
     const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Booked")
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
          <p>Your reservation for {formData.guests} on {formData.date} at {formData.time} is confirmed.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="reservation-form">
          Name<input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          Email<input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          Phone Number<input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
          Date<input type="date" name="date" required value={formData.date} onChange={handleChange} />
          Time<input type="time" name="time" required value={formData.time} onChange={handleChange} />
          Number of guests<input type="number" name="guests" min="1" max="20" required value={formData.guests} onChange={handleChange} />
          <button type="submit">Reserve</button>
        </form>
      )}
    </div>
    </>
  );
}

export default Reservation;
