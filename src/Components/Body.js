import React, { useEffect, useState } from "react";
import Restaurantcards from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
 
  const [inputSearch, setInputSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleFilterClick = () => {
    const filteredRestaurants = restaurantsData.filter((res) => res.rating > 4);
    setFilteredRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      console.log(json);
      const fetchedRestaurants =   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setRestaurantsData(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurantsData.filter((res) =>
      res.info.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
    setInputSearch("");
  };

  return restaurantsData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="search-input"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      <div className="filter-container">
        <button className="flt-btn" onClick={handleFilterClick}>
          Top Rated Restaurants
        </button>
      </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Restaurantcards key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
