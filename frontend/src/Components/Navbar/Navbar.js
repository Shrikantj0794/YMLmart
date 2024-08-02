import React, { useState } from 'react';
import './Navbar.css';

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
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <div className="profile">
          <button onClick={toggleProfileDropdown} className="profile-button">
            Profile
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
          <a href="/cart">Cart</a>
        </div>
        <div className="become-seller">
          <a href="/become-seller">Become a Seller</a>
        </div>
        <div className="three-dots">
          <button onClick={toggleThreeDotsDropdown} className="three-dots-button">...</button>
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
