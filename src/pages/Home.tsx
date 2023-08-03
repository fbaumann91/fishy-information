import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RegionContext } from "../contexts/RegionContext";
import { calculateAverageNutrition } from "../utils";
import './Home.css';

const Home: React.FC = () => {
  const { regions } = useContext(RegionContext);

  return (
    <div>
      <div className="home-container">
        <h2>Home</h2>
        <p>Select a region to find out more</p>
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
