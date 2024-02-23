import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestuarantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data)
    }
    catch(error){
        console.log("Data not find");
    }
  }
  return resInfo;
};

export default useRestuarantMenu;
