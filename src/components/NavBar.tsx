import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NOAAFisheriesRegion } from "../enums/NOAAFisheriesRegion";
import './NavBar.css';

function NavBar() {
  const [showRegions, setShowRegions] = useState(false);

  const toggleRegions = () => {
    setShowRegions(!showRegions);
  }

  // TODO: Update Styles to look a little better

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="logo.png" alt="Logo" className="logo" /> {/* TODO: Figure out a logo to use */}
      </div>

      <div className="links-section">
        <Link to="/">Home</Link>

        <div className="dropdown">
          <button onClick={toggleRegions} className="dropbtn">Regions ⌵</button>
          {showRegions && (
            <div className="dropdown-content">
              {
                //Loop through the NOAAFisheriesRegion enum and add each item to a dropdown
              Object.values(NOAAFisheriesRegion).map(region => (
                <Link key={region} to={`/region/${region}`}>{region}</Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
