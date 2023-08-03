import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { RegionContext } from "../contexts/RegionContext";
import logo from '../assets/logo.png';

function NavBar() {
  const [showRegions, setShowRegions] = useState(false);
  const { regions } = useContext(RegionContext);

  const toggleRegions = () => {
    setShowRegions(!showRegions);
  }

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
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
