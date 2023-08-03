import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RegionContext } from "../contexts/RegionContext";
import { calculateAverageNutrition } from "../utils";
import "./Region.css";
import FishInfo from "../components/FishInfo";

const Region: React.FC = () => {
  const { regions } = useContext(RegionContext);
  const { regionName } = useParams<{ regionName: string }>();
  const region = regions.find((region) => region.Region === regionName);

  const [selectedFish, setSelectedFish] = useState(region?.Fish[0]);

  useEffect(() => {
    //Set the selected fish to the first fish in the region on region change
    setSelectedFish(region?.Fish[0]);
  }, [region]);

  if (!region) {
    return <p>Region not found</p>;
  }

  const { averageCalories, averageFat } = calculateAverageNutrition(
    region.Fish
  );

  return (
    <div className="region-container">
      <div className="fish-list-container">
      <h1>{region.Region}</h1>
      <p>Average Calories: {averageCalories.toFixed(2)}</p>
      <p>Average Fat: {averageFat.toFixed(2)}g</p>
        <h2 className="fish-list-header">Fish in the Region</h2>
        <div className="fish-list">
          {/* Render the region fish array as a list */}
        {region.Fish.map((fish) => (
            <div
              key={fish.SpeciesName}
              className="fish-list-item"
              onClick={() => setSelectedFish(fish)}
            >
              {fish.SpeciesName}
            </div>
          ))}
      </div>
      </div>
      <div className="fish-info">
        {selectedFish && <FishInfo fish={selectedFish} />}
      </div>
    </div>
  );
};

export default Region;
