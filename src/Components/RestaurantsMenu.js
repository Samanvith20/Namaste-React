import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
   const[Showindex ,setshowindex]= useState(0)
  const resinfo = useRestaurantmenu(resId);

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
    
    const categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
 
  return <div className="text-center">
  <h1 className="font-bold my-6 text-2xl">{name}</h1>
  <p className="font-bold text-lg">
    {cuisines.join(", ")} - {costForTwoMessage}
  </p>
  {/* categories accordions */}
  {categories.map((category, index) => (
   
    <RestaurantCategory
      key={category?.card?.name}
      data={category?.card?.card}
      Showitem={index==Showindex?true:false}
       setshowindex={()=>setshowindex(index)}
      
    />
  ))}
</div>
}

export default RestaurantMenu;
