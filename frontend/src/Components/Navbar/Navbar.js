import React, { useState } from 'react';
import './Navbar.css';
import { FaUser, FaCartArrowDown, FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [threeDotsDropdownOpen, setThreeDotsDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const toggleThreeDotsDropdown = () => {
    setThreeDotsDropdownOpen(!threeDotsDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search For Products, Brands and More"
          />
        </div>
      </div>
      <div className="navbar-right">
        <div className="profile">
          <button onClick={toggleProfileDropdown} className="profile-button">
            <FaUser className="navbar-icon" />
            <span className="icon-label">Username</span> {/* Added label */}
          </button>
          {profileDropdownOpen && (
            <div className="dropdown profile-dropdown">
              <a href="/profile">My Profile</a>
              <a href="/wishlist">Wishlist</a>
              <a href="/coupons">Coupons</a>
              <a href="/notifications">Notification</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
        <div className="cart">
          <a href="/cart" className="cart-link">
            <FaCartArrowDown className="navbar-icon" />
            <span className="icon-label">Cart</span> {/* Added label */}
          </a>
        </div>
        <div className="become-seller">
          <a href="/become-seller" className="become-seller-link">
            <FaUser className="navbar-icon" />
            <span className="icon-label">Become a Seller</span> {/* Added label */}
          </a>
        </div>
        <div className="three-dots">
          <button onClick={toggleThreeDotsDropdown} className="three-dots-button">
            <BsThreeDotsVertical className="navbar-icon" />
          </button>
          {threeDotsDropdownOpen && (
            <div className="dropdown three-dots-dropdown">
              <a href="/settings">Settings</a>
              <a href="/help">Help</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
