import { useState } from "react";
import { CART_IMAGE, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import LOGO_URL  from "../utils/images/Ecommerce image.png"

const Header = () => {
  const cartitems = useSelector((store) => store.cart.items);

  const [buttonname, setbuttonname] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" className="w-32 h-auto" />
      </div>
      <div className="flex items-center space-x-10 text-xl">
        <div className="online">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </div>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact Us
        </Link>
        <Link to="/grocery" className="hover:text-gray-300">
          Grocery
        </Link>
        <div className="flex items-center space-x-1 cart-icon-container text-white">
          <Link to="/cart" className="flex items-center hover:text-gray-300">
            <img src={CART_IMAGE} alt="Cart Icon" className="w-10 h-auto" />
            <span className="ml-1">{cartitems.length}</span>
          </Link>
        </div>
        <button
          className="btn-name px-2 py-1 bg-green-500 text-white rounded cursor-pointer transition duration-300 hover:bg-green-600"
          onClick={() => {
            setbuttonname(buttonname === "login" ? "logout" : "login");
          }}
        >
          {buttonname}
        </button>
      </div>
    </div>
  );
};

export default Header;
