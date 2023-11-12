import RestaurentCard from "./RestaurentCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  // React Hooks
  let [listOfRestuarents, setListOfRestuarents] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter"
        onClick={() => {
          const filteredList = listOfRestuarents.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestuarents(filteredList);
        }}
      >
        Top Rated Restuarents
      </button>
      <div className="res-container">
        {listOfRestuarents.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
