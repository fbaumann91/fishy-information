import React from "react";
import { Fish } from "../interfaces/Fish";
import { parseDescription } from "../utils";
import "./FishInfo.css";

interface FishInfoProps {
  fish: Fish;
}

const FishInfo: React.FC<FishInfoProps> = ({ fish }) => {
  return (
    <div>
      <h2>{fish.SpeciesName}</h2>
      <img
        className="fish-image"
        src={fish.SpeciesIllustrationPhoto.src}
        alt={fish.SpeciesName}
      />
      <p>Calories: {fish.Calories}</p>
      <p>Fat: {fish.FatTotal}</p>
      {parseDescription(fish.PhysicalDescription).map(
        (desc, index) => desc && <p key={index}>{desc}</p>
      )}
    </div>
  );
};

export default FishInfo;
