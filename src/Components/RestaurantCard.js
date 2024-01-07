import React from "react";
import { IMG_URL } from "../utils/constants";

const Restaurantcards = (props) => {
  const { resdata } = props;

  if (!resdata) {
    return <div>No data available</div>;
  }

  const { cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime } = resdata.info

  return (
    <div className="card-logo">
      <img alt="card-image" src={IMG_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} </h4>
    </div>
  );
};

export default Restaurantcards;
