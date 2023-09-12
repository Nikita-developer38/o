import React from 'react';
import './SideMenu.css'; // You'll create this CSS file

const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul className="menu-items">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#post">Post</a></li>
        <li><a href="#create">Create</a></li>
        <li><a href="#reel">Reel</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#messages">Messages</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;
