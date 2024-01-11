import React from "react";
import { IMG_URL } from "../utils/constants";

const Restaurantcards = (props) => {
  const { resdata } = props;

  if (!resdata) {
    return <div className="text-center text-gray-500">No data available</div>;
  }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resdata.info;

  return (
    <div className="card-logo bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
      <img
        alt="card-image"
        src={IMG_URL + cloudinaryImageId}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <div className="text-gray-600 mb-2">{cuisines.join(", ")}</div>
      <div className="flex items-center mb-2">
        <div className="mr-2 text-yellow-500">
          {Array.from({ length: Math.floor(avgRating) }).map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <div>{avgRating.toFixed(1)} stars</div>
      </div>
      <div className="text-gray-600 mb-2">{costForTwo}</div>
      <div className="text-gray-600">Delivery Time: {sla.deliveryTime} minutes</div>
    </div>
  );
};

export default Restaurantcards;
