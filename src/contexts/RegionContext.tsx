import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Fish } from "../interfaces/Fish";

interface Region {
  Region: string;
  Fish: Fish[];
}

interface RegionContextProps {
  regions: Region[];
}

interface RegionProviderProps {
  children: ReactNode;
}

const RegionContext = createContext<RegionContextProps>({ 
  regions: [] 
});

const RegionProvider = ({ children }: RegionProviderProps) => {

  const [regions, setRegions] = useState<Region[]>([]);

  const API_URL = "http://localhost:5001/gofish?apikey=abrrad";

  const parseRegionData = async (data: Fish[]) => {
    const regionsData: { [key: string]: Region } = {};
    data.forEach((item) => {
      const regionName = item.NOAAFisheriesRegion;
      if (!regionsData[regionName]) {
        regionsData[regionName] = { Region: regionName, Fish: [] };
      }
      regionsData[regionName].Fish.push(item);
    });
    return regionsData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data: Fish[] = await response.json();
        const parsedRegionsData = await parseRegionData(data);
        setRegions(Object.values(parsedRegionsData));
      } catch (error) {
        console.error("Error fetching regions and fish: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <RegionContext.Provider value={{ regions }}>
      {children}
    </RegionContext.Provider>
  );
};

export { RegionContext, RegionProvider };
