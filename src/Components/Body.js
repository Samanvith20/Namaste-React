import Restaurantcards from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
 

  const handleFilterClick = () => {
   const filteredRestaurants = restaurantsData.filter((res) => res.rating > 4);
    setRestaurantsData(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      // Optional Chaining
    setRestaurantsData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return restaurantsData.length===0?<Shimmer/> :(
    <div className="Body">
      <div className="search">
        <button className="flt-btn" onClick={handleFilterClick}>
          Filter button
        </button>
      </div>
      <div className="res-container">
      {restaurantsData.map((restaurant) => (
  <Restaurantcards key={restaurant.info.id} resdata={restaurant} />
))}

      </div>
    </div>
  );
};

export default Body;
