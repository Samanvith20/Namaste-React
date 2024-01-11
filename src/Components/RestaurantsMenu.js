import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId);

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0] || {};
  
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines && cuisines.length > 0
          ? cuisines.join(", ")
          : "No cuisines"} - {costForTwoMessage}
      </p>
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
