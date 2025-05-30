// Restaurants (restaurants list) (Elvis & Naima)
    //Image of the restaurant
    // Name name of the restaurant
                // ||
    // (Restaurant ) => name , image , cusines, menu, add to favouritesbutton,
import RestauarntDetails from './RestaurantDetails';



function Restaurant({name,address,cuisine,ratings,menu,hours,reviews,image,onView}){
    console.log({menu})
    return(
        <div>
              <h3>{name}</h3>
              <small>{address}</small>
              <p>{cuisine}</p>
              <span>{ratings}</span>
              
              {/* <ul>
              {menu.map((category, idx) => (
                <div className='menu' key={idx}>
                  <li>{category.category}</li>
                  <ul>
                    {Array.isArray(category.foods) && category.foods.map((food, i) => (
                      <li key={i}>{food}</li>
                    ))}
                  </ul>
                  <img src={category.image} alt={category.category} className='menu-img' />
                </div>
              ))}
            </ul> */}
              <p>{hours}</p>
              <p>{reviews}</p>
              <button className='restauarant-button' onClick={onView}>View Restauarnt</button>
              <img src={image}></img>
        </div>
        
    )

}

    export default Restaurant;