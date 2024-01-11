
import { useState } from "react";
import ItemList from "./Itemlist";

const RestaurantCategory = ({ data }) => {
   const[item,setitem]=useState(false)
   const handlechange =()=>{
      // toggle  the value of item
       return setitem(!item)
   }
  return (
    <div className="w-full max-w-screen-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center bg-red-400 p-4 text-white cursor-pointer" onClick={handlechange}>
        <div className="flex items-center">
          <span className="text-xl font-bold mr-4">
            {data.title} ({data.itemCards.length})
          </span>
          
        </div>
        
        <span className="text-2xl">⬇️</span>
      </div>

      {/* Item List */}
     { item && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
