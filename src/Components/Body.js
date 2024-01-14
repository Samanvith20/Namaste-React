import React, { useEffect, useState } from "react";
import Restaurantcards from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import debounce from "lodash.debounce"; 

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleFilterClick = () => {
    const filteredRestaurantsData = restaurantsData.filter((res) => res.info.avgRating > 4.2);
    setFilteredRestaurants(filteredRestaurantsData);
    setSuggestions([]); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();
      const fetchedRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (fetchedRestaurants) {
        setRestaurantsData(fetchedRestaurants);
        setFilteredRestaurants(fetchedRestaurants)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlinestatus = useOnlineStatus();
  if (!onlinestatus) {
    return (
      <div className="offline-message-container text-center mt-8">
        <h1 className="offline-heading text-2xl text-gray-800">Uh-oh! You're offline</h1>
        <p className="offline-text text-gray-600">
          It seems like you're not connected to the internet. Please check your connection and try again.
        </p>
        <p className="offline-tip text-sm text-gray-500">
          Tip: You can try refreshing the page or connecting to a different network.
        </p>
      </div>
    );
  }

  const debouncedFetchSuggestions = debounce((searchTerm) => {
    const matchingRestaurants = restaurantsData.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(matchingRestaurants);
  }, 300);

  const handleSearch = () => {
    setSuggestions([]);
    debouncedFetchSuggestions(inputSearch);
  };

  if (restaurantsData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body p-4">
      <div className="flex justify-between items-center mb-4 hover:to-black">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
            debouncedFetchSuggestions(e.target.value);
          }}
          className="search-input p-2 w-2/3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />
        <button
          className="px-4 py-2 ml-2 bg-green-500 text-white rounded cursor-pointer transition duration-300 hover:bg-green-600"
          onClick={handleSearch}
        >
          Search
        </button>
        <div className="ml-auto">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer transition duration-300 hover:bg-green-600 mr-8"
            onClick={handleFilterClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      
{suggestions.length > 0 && (
  <div className="suggestion-container bg-white border border-black rounded p-4 shadow-md">
    <ul className="list-none p-0">
      {suggestions.map((suggestion) => (
        <li className="mb-2" key={suggestion?.info.id}>
          <Link to={`/restaurants/${suggestion?.info.id}`} className="text-black no-underline transition duration-300 hover:text-blue-800">
            {suggestion?.info.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}


      <div className="hover:border-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant?.info.id} to={`/restaurants/${restaurant?.info.id}`}>
              <Restaurantcards resdata={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-gray-600">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
