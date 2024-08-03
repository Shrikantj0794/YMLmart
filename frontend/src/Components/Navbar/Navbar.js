import React, { useState } from 'react';
import './Navbar.css';
import { FaUser, FaCartArrowDown,FaRegUserCircle, FaSearch, FaChevronDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStore } from "react-icons/fa6";

const Navbar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [threeDotsDropdownOpen, setThreeDotsDropdownOpen] = useState(false);

  const handleMouseEnterProfile = () => setProfileDropdownOpen(true);
  const handleMouseLeaveProfile = () => setProfileDropdownOpen(false);

  const handleMouseEnterThreeDots = () => setThreeDotsDropdownOpen(true);
  const handleMouseLeaveThreeDots = () => setThreeDotsDropdownOpen(false);

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
        <div
          className="profile"
          onMouseEnter={handleMouseEnterProfile}
          onMouseLeave={handleMouseLeaveProfile}
        >
          <button className="profile-button">
            <FaUser className="navbar-icon" />
            <span className="icon-label">Login</span>
            <FaChevronDown className={`arrow-icon ${profileDropdownOpen ? 'rotate' : ''}`} />
          </button>
          {profileDropdownOpen && (
            <div className="dropdown profile-dropdown">
              <a href="/profile"><FaRegUserCircle className='innerIcon'/>My Profile</a>
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
            <span className="icon-label">Cart</span>
          </a>
        </div>
        <div className="become-seller">
          <a href="/become-seller" className="become-seller-link">
            <FaStore className="navbar-icon" />
            <span className="icon-label">Become a Seller</span>
          </a>
        </div>
        <div
          className="three-dots"
          onMouseEnter={handleMouseEnterThreeDots}
          onMouseLeave={handleMouseLeaveThreeDots}
        >
          <button className="three-dots-button">
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
