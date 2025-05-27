import { useEffect, useState } from 'react'
import './App.css'
import RestaurantLists from './components/RestaurantList';

function App() {
  const [restaurants,setRestaurants]=useState([]);
  useEffect(()=>{
    fetch ('http://localhost:3001/restaurants')
     .then(r=> r.json())
     .then(data=>setRestaurants(data))
  
  },[])
     console.log(restaurants)


  return (
    <>
      <RestaurantLists restaurants={restaurants}/>
    
    </>
  )
}

export default App
