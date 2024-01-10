import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
 const useRestaurantmenu = (resId) => {
    const [resinfo, setresinfo] = useState(null);
     useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url = MENU_API + resId;

    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      const fetchedMenu = json.data;
      setresinfo(fetchedMenu);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };
      return resinfo
 }
  export default useRestaurantmenu;