import { StaticImageData } from "next/image";
import PrecipitationDifference from "./photos/Climate_Data/Nepal_Precipitation_Difference.jpg";
import NepalSolarDifference from "./photos/Climate_Data/Nepal_Solar_Radiation.jpg";
import NepalSummerTemeprature from "./photos/Climate_Data/Nepal_Summer_Temperature.jpg";
import Precipitaion_Difference from "./photos/Climate_Data/Precipitation_Different_Month.jpg";
import TemperatureDifference from "./photos/Climate_Data/Temperature_Difference_Nepal.jpg";
import WinterTemperature from "./photos/Climate_Data/Winter_Temperature_Nepal.jpg";
import NepalTemperature from "./photos/Climate_Data/Nepal_Temperature.gif";
import WorldTemperature from "./photos/Climate_Data/World_Temperature_2023.gif";
import GreenSpaceChoropleth from "./photos/Urban_Data/Green_space_chropleth.png";
import Multi_Ring from "./photos/Urban_Data/Leuven_Multi_Ring.png";
import Urban_Core from "./photos/Urban_Data/Leuven_urban_core_2.png";
import Population_Density from "./photos/Urban_Data/Population_density.png";
import Urban_Fabrics from "./photos/Urban_Data/urban_fabrics.png";
// import Afrique3 from "./photos/Map_Design/Afrique.png";
import Flow from "./photos/Map_Design/Flow.png";
import CrimeAdministrative from "./photos/Spatial_Data_Quality/Crime_Administrative.png";
import CrimePopulationDensity from "./photos/Spatial_Data_Quality/crime_population_density.png";
import HeatmapDensity from "./photos/Spatial_Data_Quality/Heat_map_Crime_Estonia.png";
import threeD from "./photos/3DModel/Final.jpg";
import landscape from "./photos/LandScape/2.jpg";
import visibility from "./photos/LandScape/3.jpg";
import IOM from "./photos/Professional/IOM.png";
import PlantSat from "./photos/Professional/plantsat.png";

export type ProjectDetailtemp = {
  id: string;
  topic?: string;
  name: string;
  src: StaticImageData[];
  description: string[];
  shortDescription: string;
};

export const AcademicprojectDetail: ProjectDetailtemp[] = [
  {
    id: "1",
    name: "Climate Data",
    topic:
      "Global Climate Data: Monthly and Seasonal Temperature and Precipitation Changes in Nepal",
    src: [
      Precipitaion_Difference,
      TemperatureDifference,
      NepalSolarDifference,
      PrecipitationDifference,
      NepalSummerTemeprature,
      WinterTemperature,
      NepalTemperature,
      WorldTemperature,
    ],
    description: [
      "Nepal's precipitation patterns are strongly influenced by both the monsoon and its topography. The Himalayas trap and intensify rainfall in certain areas while creating rain shadow effects in others. During winter (December to February), the lack of significant precipitation is due to Nepal's subtropical location, where winters are typically dry. The monsoon begins in June, with moist air from the Bay of Bengal bringing increased rainfall, particularly in southern and central Nepal. The peak monsoon, from July to August, brings heavy rainfall, especially on the Himalayan slopes due to orographic effects. By September, the monsoon retreats, leading to gradually decreasing rainfall.",
      "The northern mountainous regions, especially the Himalayas, experience high temperature variability between summer and winter due to their high altitude. In contrast, the southern Terai plains have a relatively low temperature difference, moderated by tropical air masses. The mid-hill regions experience moderate temperature variations, as they are elevated but not as high as the Himalayas.",
      "The central and eastern hills, including the southern slopes of the Himalayas, experience high precipitation variation due to the monsoon winds from the Bay of Bengal. Western Nepal has moderate variation, as it is less affected by the monsoon. In the northern high Himalayas, precipitation variation is low, as these high-altitude areas, located on the leeward side, receive minimal monsoon rainfall.",
      "In Nepal, the Himalayas' higher altitude reduces solar radiation due to increased cloud cover and snowfall, while the flatter Terai lowlands receive more solar energy. The southern regions get more direct sunlight, enhancing radiation, compared to the northern highlands. Higher altitudes have a thinner atmosphere, which can increase radiation, but cloud cover and snow often reduce it. The diverse climate zones, with more cloud cover in the mountains and clearer skies in the plains, also affect solar radiation levels.",
      "The central and eastern hills, including the southern Himalayas, experience significant precipitation variation due to monsoon winds from the Bay of Bengal. Western Nepal has moderate variation, as it is less affected by the monsoon. The northern high Himalayas receive minimal monsoon rainfall, resulting in low precipitation variation due to their high altitude and leeward position.",
      "Summer temperatures are notably higher across Nepal, especially in the southern regions, where temperatures often exceed 30°C. The Terai plains and lower valleys experience particularly warm conditions, with temperatures reaching the high 20s to 30s°C.",
      "Winter temperatures are much colder, particularly in the mountainous regions, which are covered in snow, with the highest peaks remaining icy. In contrast, the southern Terai regions experience milder temperatures.",
    ],
    shortDescription:
      "Analyzing climate data reveals patterns and relationships, enhancing understanding of climatic conditions and making insights more accessible.",
  },
  {
    id: "2",
    name: "Spatial Urban Data and Geoprocessing",
    topic: "",
    src: [
      GreenSpaceChoropleth,
      Multi_Ring,
      Urban_Core,
      Population_Density,
      Urban_Fabrics,
    ],
    description: [""],
    shortDescription:
      "The analysis of European Urban Atlas data reveals patterns of urban accessibility and sprawl, offering insights into land use and population distribution. ",
  },
  {
    id: "3",
    name: " Map Design",
    src: [Flow],
    description: [""],
    shortDescription:
      "Cartography and map design are key for presenting spatial data clearly and accurately. A well-crafted map helps users interpret geographical information and make informed decisions.",
  },
  {
    id: "4",
    name: "Spatial Data Quality and Data Aggregation",
    src: [CrimeAdministrative, CrimePopulationDensity, HeatmapDensity],
    description: [""],
    shortDescription:
      "Crime point pattern analysis identifies high-crime areas and their link to population. These insights aid in crime prevention and resource optimization.",
  },
  {
    id: "5",
    name: "3D Model of Tartu City Center",
    src: [threeD],
    description: [""],
    shortDescription: "",
  },
  {
    id: "6",
    name: "Landscape modelling",
    src: [landscape, visibility],
    description: [""],
    shortDescription: "",
  },
];

export const ProfessionalWorkDetail: ProjectDetailtemp[] = [
  {
    id: "pw-1",
    name: "IOM Migration movement visualization between India and Nepal",
    src: [IOM],
    description: [""],
    shortDescription: "",
  },
  {
    id: "pw-2",
    name: "Plant Sat",
    src: [PlantSat],
    description: [""],
    shortDescription: "",
  },
];
