import React from "react";

function Header() {
  return (
    <>
      <div className="header-row">
        <a href="#/" className="logo">
          <img
            src="https://support.fossilgroup.com/resource/1692007966000/fsimages/fsImages/logo2.png"
            alt="fossil-logo"
          />
        </a>
        <input
          placeholder="What are you looking fo?"
          type="text"
          className="search-box"
        />
        <div className="nav-links">
          <a href="#/">Spare Parts</a>
          <a href="#/">Track Order</a>
          <a href="#/">Return Order</a>
          <a href="#/">Start A Repair</a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="hero-banner">
        <img src="/imgs/banner.jpg" alt="banner" />
      </div>
    </>
  );
}

export default Header;
