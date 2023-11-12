import { CDN_URL } from "../utils/Constants";

// Inline CSS
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurentCard = (props) => {
  /*  This is a Props Object which has the data
    { 
      cuisine: "Biryani ,North Indian ,Asian",
      resName: "Meghana Foods"
    } */

  /*  You can destructure on the fly. Below is the example
      const RestaurentCard = ({resName, cuisine}) => {
        .....................
        ...............
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
      }
       */

  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  // console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
