import React, { useContext } from "react";
import "../input.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (loggedInUser) {
      setLoggedInUser(""); // Log out
    } else {
      navigate("/Login"); // Navigate to login page
    }
  };

  return (
    <div className="header-container sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center w-full h-20 px-8">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="App logo" className="w-[90px] hover:opacity-80 transition-opacity" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 font-semibold">
          <li className="hover:bg-orange-500 hover:text-white rounded-md px-4 py-2 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white rounded-md px-4 py-2 transition-all">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white rounded-md px-4 py-2 transition-all">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white rounded-md px-4 py-2 transition-all">
            <Link to="/cart">
              Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
            </Link>
          </li>

          {/* Login/Logout Button */}
          <li>
            <button
              className="bg-transparent text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-all"
              onClick={handleLoginLogout}
            >
              {loggedInUser ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>

      {/* Online Status and User Info Section */}
      <div className="flex justify-between items-center bg-slate-100 px-8 py-2 text-gray-600 text-sm">
        <div>Online Status: {onlineStatus ? "✅ Online" : "🚫 Offline"}</div>
        {loggedInUser && (
          <div className="text-right">
            <Link className="text-blue-500 hover:underline">
              Ordering for: {loggedInUser}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
