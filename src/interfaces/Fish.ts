import { HarvestType } from "../enums/HarvestType";
import { NOAAFisheriesRegion } from "../enums/NOAAFisheriesRegion";
import { ServingWeight } from "../enums/ServingWeight";

export interface Fish {
    FisheryManagement:                   null | string;
    Habitat:                             null | string;
    HabitatImpacts:                      null | string;
    ImageGallery:                        SpeciesIllustrationPhoto[] | SpeciesIllustrationPhoto | null;
    Location:                            null | string;
    Management:                          null | string;
    NOAAFisheriesRegion:                 NOAAFisheriesRegion;
    Population:                          null | string;
    PopulationStatus:                    null | string;
    ScientificName:                      string;
    SpeciesAliases:                      string;
    SpeciesIllustrationPhoto:            SpeciesIllustrationPhoto;
    SpeciesName:                         string;
    AnimalHealth:                        null | string;
    Availability:                        string;
    Biology:                             string;
    Bycatch:                             null | string;
    Calories:                            null | string;
    Carbohydrate:                        null | string;
    Cholesterol:                         null | string;
    Color:                               null | string;
    DiseaseTreatmentandPrevention:       null;
    DiseasesinSalmon:                    null | string;
    DisplayedSeafoodProfileIllustration: null;
    EcosystemServices:                   null | string;
    EnvironmentalConsiderations:         null | string;
    EnvironmentalEffects:                null | string;
    FarmingMethods:                      null | string;
    FarmingMethods_:                     null | string;
    FatTotal:                            null | string;
    Feeds_:                              null | string;
    Feeds:                               null | string;
    FiberTotalDietary:                   null | string;
    FishingRate:                         null | string;
    Harvest:                             null | string;
    HarvestType:                         HarvestType;
    HealthBenefits:                      null | string;
    Human_Health_:                       null | string;
    HumanHealth:                         null | string;
    PhysicalDescription:                 string;
    Production:                          null | string;
    Protein:                             null | string;
    Quote:                               string;
    QuoteBackgroundColor:                string;
    Research:                            null | string;
    SaturatedFattyAcidsTotal:            null | string;
    Selenium:                            null | string;
    ServingWeight:                       ServingWeight | null;
    Servings:                            null | string;
    Sodium:                              null | string;
    Source:                              string;
    SugarsTotal:                         null | string;
    Taste:                               null | string;
    Texture:                             null | string;
    Path:                                string;
    last_update:                         string;
}

export interface SpeciesIllustrationPhoto {
    src:   string;
    alt:   string;
    title: string;
}


