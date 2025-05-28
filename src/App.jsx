import { useState, useEffect } from 'react'
import './App.css'

function App() {
const[restaurantData, setRestaurantData] = useState([])
useEffect(()=>{
  fetch("http://localhost:3000/restaurants")
  .then(r=>r.json())
  .then((data)=>setRestaurantData(data))
},[])
  return (
    <>

    </>
  )
}

export default App
