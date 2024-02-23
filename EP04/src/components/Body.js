import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [newList, setNewList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();

    const result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setNewList(result);
    setFilterList(result);
  };
  
  if(onlineStatus === false) return <h1>Please check your internet connection!!</h1>


  return newList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Enter resturant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterData = newList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filterData);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = newList.filter((res) => res.info.avgRating > 4);

            setFilterList(filterList);

            console.log("reached");
          }}
        >
          Top Rate Restaurant
        </button>
      </div>

      <div className="resCardContainer">
        {filterList.map((resturant) => (
       <Link key={resturant.info.id} to={`/resMenu/${resturant.info.id}`}><RestCard  resData={resturant} /></Link>   
        ))}
      </div>
    </div>
  );
};

export default Body;
