import React from "react";
import Logo from "../images/logo.png";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="whole-nav">
      <div className="left-div">
        <div>
          <img src={Logo} className="nav-logo" alt="logo" />
        </div> 
        <div>BARBE &amp; CIMON NOTATIRES</div>
      </div>

      <div className="right-div">
        <ul className='links'>
          <li>A PROPOSE</li>
          <li>NOS SERVICES</li>
          <li>ARTICLES</li>
          <li>CONTACT</li>
        
        </ul> <span className='font-semibold text-xs'>EN</span>
      </div>
    </nav>
  );
}

export default Navbar;
