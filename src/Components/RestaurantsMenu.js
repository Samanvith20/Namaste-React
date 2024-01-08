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

  const name = resinfo?.cards[2]?.card?.card?.info?.name;
  const cuisines = resinfo?.cards[2]?.card?.card?.info?.cuisines || [];
  const costForTwoMessage = resinfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

  const itemCards =
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
