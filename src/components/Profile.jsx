import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

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