import { Fish } from "./interfaces/Fish";

/**
 * Calculates the average nutrition of fish in a region
 *
 * @param {Fish[]} fishList The list to average
 * @return {number, number} The averaged calories and total fat 
 */
export const calculateAverageNutrition = (fishList: Fish[]) => {
    const total = fishList.reduce(
        (acc, fish) => {
          acc.calories += parseFloat(fish.Calories!); //TODO: modify this to check if th values are null instead of asserting they are not
          acc.fat += parseFloat(fish.FatTotal!);
          return acc;
        },
        { calories: 0, fat: 0 }
      );
    
      return {
        averageCalories: total.calories / fishList.length,
        averageFat: total.fat / fishList.length,
      };
  }

/**
 * Parses the description of a fish into a not empty list of strings
 *
 * @param {string} description The description of a fish
 * @return {string[]} An array of descriptions without html wrappers
 */
export const parseDescription = (description: string): string[] => {

    // TODO: return an error if the description provided is not valid html to be parsed
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");

    const listItems = Array.from(doc.querySelectorAll("li"));

    // Get the text from each list item and filter out the items that are blank
    return listItems.map((li) => li.textContent || "").filter(text => text);

  };
  