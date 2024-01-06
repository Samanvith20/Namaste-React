import Restaurantcards from "./RestaurantCard";
import Dummydata from "../utils/dummydata";
import { useState } from "react";

const Body = () => {
  // methods for writing a use state
   const[restaurantsData ,setRestaurantsData]=useState(Dummydata)

   
  //  const array = useState(Dummydata)--> Destructing the array
  //  2.const [restaurantsData ,setRestaurantsData]=array
  // 3. const restaurantsData= array[0]
  //   const setRestaurantsData =array[1]


  const handleFilterClick = () => {
    const filteredRestaurants = restaurantsData.filter((res) => res.rating > 4);
    
    setRestaurantsData(filteredRestaurants);
  };

  return (
    <div className="Body">
      <div className="search">
        <button className="flt-btn" onClick={handleFilterClick}>
          Filter button
        </button>
      </div>
      <div className="res-container">
        {restaurantsData.map((restaurant) => (
          <Restaurantcards key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
