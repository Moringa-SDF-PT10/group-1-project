import React from 'react';
import './FoodGallery.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/assets/GalleryPics/download (1).jpg';
import img2 from '../assets/assets/GalleryPics/download (2).jpg';
import img3 from '../assets/assets/GalleryPics/download (3).jpg';
import img4 from '../assets/assets/GalleryPics/download (4).jpg';
import img5 from '../assets/assets/GalleryPics/download (5).jpg';
import img6 from '../assets/assets/GalleryPics/download (6).jpg';
import img7 from '../assets/assets/GalleryPics/download (7).jpg';
import img8 from '../assets/assets/GalleryPics/download (8).jpg';
import img9 from '../assets/assets/GalleryPics/download (9).jpg';
import img10 from '../assets/assets/GalleryPics/download (10).jpg';
import img11 from '../assets/assets/GalleryPics/download (11).jpg';
import img12 from '../assets/assets/GalleryPics/download (12).jpg';
import img13 from '../assets/assets/GalleryPics/download (13).jpg';
import img14 from '../assets/assets/GalleryPics/download.jpg';
import img15 from '../assets/assets/GalleryPics/images (1).jpg';
import img16 from '../assets/assets/GalleryPics/images (2).jpg';
import img17 from '../assets/assets/GalleryPics/images (3).jpg';
import img18 from '../assets/assets/GalleryPics/images (4).jpg';
import img19 from '../assets/assets/GalleryPics/images (5).jpg';
import img20 from '../assets/assets/GalleryPics/images (6).jpg';
import img21 from '../assets/assets/GalleryPics/images (7).jpg';
import img22 from '../assets/assets/GalleryPics/images (8).jpg';
import img23 from '../assets/assets/GalleryPics/images (9).jpg';
import img24 from '../assets/assets/GalleryPics/images (10).jpg';
import img25 from '../assets/assets/GalleryPics/images (11).jpg';
import img26 from '../assets/assets/GalleryPics/images.jpg';
import img27 from '../assets/assets/GalleryPics/images (12).jpg';
import img28 from '../assets/assets/GalleryPics/images (13).jpg';
import img29 from '../assets/assets/GalleryPics/download (14).jpg';
import img30 from '../assets/assets/GalleryPics/download (15).jpg';

const foodItems = [
  { id: 1, name: '1', image: img1 },
  { id: 2, name: '2', image: img2 },
  { id: 3, name: '3', image: img3 },
  { id: 4, name: '4', image: img4 },
  { id: 5, name: '5', image: img5 },
  { id: 6, name: '6', image: img6 },
  { id: 7, name: '7', image: img7 },
  { id: 8, name: '8', image: img8 },
  { id: 9, name: '9', image: img9 },
  { id: 10, name: '10', image: img10 },
  { id: 11, name: '11', image: img11 },
  { id: 12, name: '12', image: img12 },
  { id: 13, name: '13', image: img13 },
  { id: 14, name: '14', image: img14 },
  { id: 15, name: '15', image: img15 },
  { id: 16, name: '16', image: img16 },
  { id: 17, name: '17', image: img17 },
  { id: 18, name: '18', image: img18 },
  { id: 19, name: '19', image: img19 },
  { id: 20, name: '20', image: img20 },
  { id: 21, name: '21', image: img21 },
  { id: 22, name: '22', image: img22 },
  { id: 23, name: '23', image: img23 },
  { id: 24, name: '24', image: img24 },
  { id: 25, name: '25', image: img25 },
  { id: 26, name: '26', image: img26 },
  { id: 27, name: '27', image: img27 },
  { id: 28, name: '28', image: img28 },
  { id: 29, name: '29', image: img29 },
  { id: 30, name: '30', image: img30 },
];

function FoodGallery() {
   const navigate = useNavigate();
  return (
    <div className="food-gallery-container">
       <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h2>Food Gallery</h2>
      <div className="food-gallery-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={`Food ${item.id}`} className="food-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodGallery;
