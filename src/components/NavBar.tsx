import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { RegionContext } from "../contexts/RegionContext";

function NavBar() {
  const [showRegions, setShowRegions] = useState(false);
  const { regions } = useContext(RegionContext);

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
                regions.map(region => (
                  <Link key={region.Region} to={`/region/${region.Region}`}>{region.Region}</Link>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
