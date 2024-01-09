import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url = MENU_API + resId;

    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      const fetchedMenu = json.data;
      setresinfo(fetchedMenu);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  if (resinfo === null) return <Shimmer />;

 
  const { name, cuisines, costForTwoMessage } =
  resinfo?.cards[2]?.card?.card?.info || resinfo?.cards[0]?.card?.card?.info

const { itemCards } =
  resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || 
  resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
  resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card ||
  resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card ||


  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines && cuisines.length > 0 ? cuisines.join(", ") : "No cuisines"} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
      {itemCards && itemCards.length > 0 ? (
  itemCards.map((item) => (
    <li key={item.card.info.id}>
       <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
    </li>
  ))
) : (
 
  <p>No items found.</p>
)}

      </ul>
    </div>
  );
};

export default RestaurantMenu;
