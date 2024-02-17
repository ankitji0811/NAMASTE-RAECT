import RestCard from "./RestCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [newList, setNewList] = useState(resList);

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = newList.filter((res) => res.info.avgRating > 4);
          console.log(filterList);

          setNewList(filterList);

          console.log('reached')
        }}
      >
        Top Rate Restaurant
      </button>
      <div className="resCardContainer">
        {newList.map((resturant) => (
          <RestCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
