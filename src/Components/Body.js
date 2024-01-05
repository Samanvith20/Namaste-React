import Restaurantcards from "./RestaurantCard";
import resList from "../utils/dummydata";
const Body = () => {
    return (
      <div className="Body">
        <div className="search">
          Search
        </div>
        <div className="res-container">
          
        {resList.map((restaurant) => (
  <Restaurantcards key={restaurant.id} resdata={restaurant} />
))}

        </div>
      </div>
    );
  }
  export default Body