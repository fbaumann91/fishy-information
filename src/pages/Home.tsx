import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RegionContext } from "../contexts/RegionContext";
import { calculateAverageNutrition } from "../utils";
import './Home.css';

const Home: React.FC = () => {
  const { regions } = useContext(RegionContext);

  return (
    <div>
      <h1 className="home-header">Welcome to Fishy Information</h1>
      <p className="home-description">Please select a region below to find out more</p>

      <div className="home-container">
        {regions.map((region, index) => {
          const { averageCalories, averageFat } = calculateAverageNutrition(
            region.Fish
          );
          return (
            <Link to={`/region/${region.Region}`} key={index}>
              <div className="region-box">
                <h2>{region.Region}</h2>
                <p>Average Calories: {averageCalories.toFixed(2)}</p>
                <p>Average Fat: {averageFat.toFixed(2)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
