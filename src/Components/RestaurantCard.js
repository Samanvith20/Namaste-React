 import { IMG_URL } from "../utils/constants";
 const Restaurantcards = (props) => {
    const { resdata } = props;
  
    if (!resdata || !resdata.restaurants) {
      return <div>No data available</div>;
    }
  
    const { name, cuisines, rating, deliveryTime } = resdata?.restaurants
  
    return (
      <div className="card-logo">
        <img alt="card-image" src={IMG_URL} />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h3>{rating}</h3>
        <p>{deliveryTime}</p>
      </div>
    );
  };
   export default Restaurantcards