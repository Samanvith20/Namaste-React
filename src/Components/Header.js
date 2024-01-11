import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [buttonname, setbuttonname] = useState("login");
  const onlineStatus = useOnlineStatus();
   return (
    <div className="Header bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" className="w-32 h-auto" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-10  items-center text-xl"> 
          <li className="online">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>cart</li>
         
          <button
            className="btn-name px-2 py-1 bg-green-500 text-white rounded cursor-pointer transition duration-300 hover:bg-green-600"
            onClick={() => {
              setbuttonname(buttonname === "login" ? "logout" : "login");
            }}
          >
            {buttonname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
