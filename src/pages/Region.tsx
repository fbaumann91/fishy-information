import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RegionContext } from "../contexts/RegionContext";
import { calculateAverageNutrition, parseDescription } from "../utils";

const Region: React.FC = () => {
  const { regions } = useContext(RegionContext);
  const { regionName } = useParams<{ regionName: string }>();
  const region = regions.find((region) => region.Region === regionName);
  
  if (!region) {
    return <p>Region not found</p>;
  }

  const { averageCalories, averageFat } = calculateAverageNutrition(region.Fish);

  return (
    <div>
      <h1>{region.Region}</h1>
      <p>Average Calories: {averageCalories}</p>
      <p>Average Fat: {averageFat}</p>
      {region.Fish.map((fish) => (
        <div key={fish.SpeciesName}>
          <h2>{fish.SpeciesName}</h2>
          <img src={fish.SpeciesIllustrationPhoto.src} alt={fish.SpeciesName} />
          <p>Calories: {fish.Calories}</p>
          <p>Fat: {fish.FatTotal}</p>
          {parseDescription(fish.PhysicalDescription).map((desc, index) => (
            desc && <p key={index}>{desc}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Region;
