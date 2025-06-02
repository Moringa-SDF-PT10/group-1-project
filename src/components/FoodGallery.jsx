import React from 'react';
import './FoodGallery.css'

const foodItems=[
  {
  id : 1,
  name : '1',
  image: 'src/assets/assets/GalleryPics/download (1).jpg',
  
},
  {
  id : 2,
  name : '2',
  image: 'src/assets/assets/GalleryPics/download (2).jpg',
  
},
  {
  id : 3,
  name : '3',
  image: 'src/assets/assets/GalleryPics/download (3).jpg',
  
},
  {
  id : 4,
  name : '4',
  image: 'src/assets/assets/GalleryPics/download (4).jpg',
  
},
  {
  id : 5,
  name : '5',
  image: 'src/assets/assets/GalleryPics/download (5).jpg',
  
},
  {
  id : 6,
  name : '6',
  image: 'src/assets/assets/GalleryPics/download (6).jpg',
  
},
  {
  id : 7,
  name : '7',
  image: 'src/assets/assets/GalleryPics/download (7).jpg',
  
},
  {
  id : 8,
  name : '8',
  image: 'src/assets/assets/GalleryPics/download (8).jpg',
  
},
  {
  id : 9,
  name : '9',
  image: 'src/assets/assets/GalleryPics/download (9).jpg',
  
},
  {
  id : 10,
  name : '10',
  image: 'src/assets/assets/GalleryPics/download (10).jpg',
  
},
  {
  id : 11,
  name : '11',
  image: 'src/assets/assets/GalleryPics/download (11).jpg',
  
},
  {
  id : 12,
  name : '12',
  image: 'src/assets/assets/GalleryPics/download (12).jpg',
  
},
  {
  id : 13,
  name : '13',
  image: 'src/assets/assets/GalleryPics/download (13).jpg',
  
},
  {
  id : 14,
  name : '14',
  image: 'src/assets/assets/GalleryPics/download.jpg',
  
},
  {
  id : 15,
  name : '15',
  image: 'src/assets/assets/GalleryPics/images (1).jpg',
  
},
  {
  id : 16,
  name : '16',
  image: 'src/assets/assets/GalleryPics/images (2).jpg',
  
},
  {
  id : 17,
  name : '17',
  image: 'src/assets/assets/GalleryPics/images (3).jpg',
  
},
  {
  id : 18,
  name : '18',
  image: 'src/assets/assets/GalleryPics/images (4).jpg',
  
},
  {
  id : 19,
  name : '19',
  image: 'src/assets/assets/GalleryPics/images (5).jpg',
  
},
  {
  id : 20,
  name : '20',
  image: 'src/assets/assets/GalleryPics/images (6).jpg',
  
},
{
  id:21,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (7).jpg',
},
{
  id:22,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (8).jpg',
},
{
  id:23,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (9).jpg',
},
{
  id:24,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (10).jpg',
},
{
  id:25,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (11).jpg',
},
{
  id:26,
  name:'',
  image: 'src/assets/assets/GalleryPics/images.jpg',
},
{
  id:27,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (12).jpg',
},
{
  id:28,
  name:'',
  image: 'src/assets/assets/GalleryPics/images (13).jpg',
},
{
  id:29,
  name:'',
  image: 'src/assets/assets/GalleryPics/download (14).jpg',
},
{
  id:30,
  name:'',
  image: 'src/assets/assets/GalleryPics/download (15).jpg',
},
]
function FoodGallery() {
  return (
    <div className="food-gallery-container">
      <h2>Food Gallery</h2>
      <div className="food-gallery-grid">
        {foodItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            {/* <p className="food-name">{item.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodGallery;
