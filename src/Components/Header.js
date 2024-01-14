import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CART_IMAGE,  } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Ecommerceimage from "../utils/images/Ecommerce image.png"

const Header = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const [buttonname, setbuttonname] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="bg-gray-800 text-white p-4 md:flex md:justify-between md:items-center">
      {/* Logo*/}
      <div className="logo mb-4 md:mb-0">
        <img src={Ecommerceimage} alt="Logo" className="w-28 h-auto" />
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 text-xl">
        {/* Online Status */}
        <div className="online mb-4 md:mb-0">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 text-xl">
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
        </nav>
        {/* Cart Icon and Button */}
        <div className="flex items-center space-x-10 cart-icon-container  text-white ">
          <Link to="/cart" className="flex items-center hover:text-gray-300">
            <img src={CART_IMAGE} alt="Cart Icon" className="w-10 h-auto" />
            <span className="ml-1">{cartitems.length}</span>
          </Link>
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
    </div>
  );
};

export default Header;
