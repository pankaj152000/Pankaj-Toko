import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return(
    <div className="header">
      <div className="options">
        <h5 className="option">Home</h5>
        <h5 className="option">About</h5>
        <h5 className="option">FAQs</h5>
        <h5 className="option">Blog</h5>
        <Link to="/signin"><h5 className="option">Sign in</h5></Link> 
        <h5 className="option">Contact</h5>
      </div>
    </div>
  );
};
export default Header;
