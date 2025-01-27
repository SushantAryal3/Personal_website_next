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
import Afrique3 from "./photos/Map_Design/Afrique.png";
import Flow from "./photos/Map_Design/Flow.png";
import CrimeAdministrative from "./photos/Spatial_Data_Quality/Crime_Administrative.png";
import CrimePopulationDensity from "./photos/Spatial_Data_Quality/crime_population_density.png";
import HeatmapDensity from "./photos/Spatial_Data_Quality/Heat_map_Crime_Estonia.png";
import threeD from "./photos/3DModel/Final.jpg";
import landscape from "./photos/LandScape/2.jpg";
import visibility from "./photos/LandScape/3.jpg";
import IOM from "./photos/Professional/IOM.png";
import PlantSat from "./photos/Professional/plantsat.png";
import GEE from "./photos/RS_SDS/GEE.png";
import PopulationDensity from "./photos/Descriptive_statistics/Sushant_animation.gif";
import Geology from "./photos/suitability_analysis/Geology classes.jpg";
import Landuse from "./photos/suitability_analysis/LandUse_reclassify.jpg";
import population_densitySus from "./photos/suitability_analysis/Population_Density_reclassify.jpg";
import possibleDam from "./photos/suitability_analysis/Possilbe Dam Site.jpg";
import roadNetwork from "./photos/suitability_analysis/Road_Network.jpg";
import Slope from "./photos/suitability_analysis/Slope Classes.jpg";
import stream from "./photos/suitability_analysis/Stream_order_reclassify.jpg";
import studyArea from "./photos/suitability_analysis/study_area.jpg";
import suitabilityMap from "./photos/suitability_analysis/Suitability_Map.jpg";
import TWI from "./photos/suitability_analysis/TWI Classes.jpg";
import catchment from "./photos/Map_Design/example_3D_catchment.gif";
import immigration from "./photos/Descriptive_statistics/1980_Migration.png";
import immigration2 from "./photos/Descriptive_statistics/2000_Migration.png";
import immigration3 from "./photos/Descriptive_statistics/2020_Migration.png";
import lidar from "./photos/3DModel/lidar.jpg";
import cityYatri1 from "./photos/City Yatri/Bus.jpg";
import cityYatri2 from "./photos/City Yatri/Bus1.jpg";
import cityYatri3 from "./photos/City Yatri/CityYatri3.webp";
import DealMaps1 from "./photos/DealMap/Deals.jpg";
import DealMaps2 from "./photos/DealMap/Deals2.jpg";
import DealMaps3 from "./photos/DealMap/Deals3.webp";
import Ecoapp1 from "./photos/Park/Eco1.webp";
import Ecoapp2 from "./photos/Park/Eco2.webp";
import Ecoapp3 from "./photos/Park/Eco3.webp";
import EWS1 from "./photos/EWS/EWS1.png";
import EWS2 from "./photos/EWS/EWS2.png";
import EWS3 from "./photos/EWS/Login.png";

export type ProjectDetailtemp = {
  id: string;
  topic?: string;
  data?: string;
  tools?: string;
  introduction?: string;
  skill_gained?: string[];
  skill_gained_description?: string[];
  link?: string;
  code?: string;
  application?: string;
  name: string;
  src: StaticImageData[];
  description: string[];
  shortDescription: string;
  singleImage?: boolean;
  imageOnly?: boolean;
  unique?: boolean;
};

export const AcademicprojectDetail: ProjectDetailtemp[] = [
  {
    id: "ac-1",
    topic:
      "Land Surface Temperature (LST) and Snow cover visualization for Mountainous District of Nepal",
    name: "Remote sensing with GEE",
    data: "MODIS/Terra Land Surface Temperature, MODIS/Terra Snow Cover",
    tools: "Google Earth Engine",
    skill_gained: [
      "Data Visualization",
      "Geospatial Analysis",
      "GEE Interactive Tool App Development",
      "Environmental Monitoring",
      "Google Earth Engine (GEE)",
    ],
    skill_gained_description: [
      "Developed a GEE app to visualize snow cover and land temperature trends.",
      "Analyzed and displayed median and daily temperature data for each year from 2000 to 2020.",
      "Designed a user-friendly interface allowing year selection and dynamic updates of data visualization",
      "Calculated and represented snow cover percentage for enhanced understanding of seasonal and climatic variations.",
      "Leveraged GEE's powerful cloud-based platform for efficient geospatial computations and rendering.",
    ],
    src: [GEE],
    introduction:
      "This project aims to analyze and visualize Land Surface Temperature (LST) and snow cover dynamics in the mountainous district of Nepal using satellite imagery and Google Earth Engine (GEE). Nepal, with its diverse topography and unique climatic conditions, is particularly sensitive to variations in LST and snow cover, which are key indicators of climate change and its impacts on the environment.",
    link: "https://ee-aryalsushant564.projects.earthengine.app/view/mountanious-district-nepal",
    code: "https://code.earthengine.google.com/866bd59718f8a338444323bf4c72ddc0",

    application:
      "The project is a valuable tool for analyzing climate change impacts by visualizing two decades of temperature trends and snow cover changes. It aids policymakers and planners in managing water resources, predicting natural disasters, and supporting agricultural planning. Researchers can leverage the app to study environmental dynamics, while educators and students can use it as an interactive learning resource for geospatial analysis and environmental monitoring.",
    description: [""],
    shortDescription: "",
    singleImage: true,
  },
  {
    id: "ac-2",
    topic:
      "Descriptive statistics and Data Classification and Visualization of world demographic",
    name: "Descriptive statistic and data classification",
    data: "UN population Estimate",
    tools: "QGIS, Excel",
    skill_gained: [
      "Data Preparation and Management",
      " Data Classification (Quantiles, Equal Interval, Standard Deviation, Natural break, Manual )",
      "Data Exploration",
      "Visualization Techniques",
    ],
    src: [PopulationDensity, immigration, immigration2, immigration3],
    application: "",
    description: [""],
    shortDescription: "",
    imageOnly: true,
  },
  {
    id: "ac-3",
    name: " Map Design",
    topic: "Map Design",
    tools: "QGIS",
    data: "Natural Earth, MERIT DEM, Estonian Land board, Daily regular movements in Estonia",
    src: [Flow, Afrique3, catchment],
    skill_gained: [
      "Symbology and Thematic Mapping",
      "Map Labeling and Annotation",
      "Cartographic Design",
      "Flow Mapping",
      "3D Visualization",
    ],
    description: [""],
    imageOnly: true,
    shortDescription:
      "Cartography and map design are key for presenting spatial data clearly and accurately. A well-crafted map helps users interpret geographical information and make informed decisions.",
  },
  {
    id: "ac-4",
    name: "Spatial Urban Data and Geoprocessing",
    topic: "Spatial Analysis of Urban Data (Leuven)",
    tools: "QGIS, Copernicus Urban Atlas Data",
    data: "Urban Atlas (European Union), Leuven population data, Leuven city data",
    src: [
      GreenSpaceChoropleth,
      Multi_Ring,
      Urban_Core,
      Population_Density,
      Urban_Fabrics,
    ],
    skill_gained: [
      "GIS Analysis",
      "Accessibility Analysis",
      "Urban Sprawl Analysis",
      "Population Density Analysis",
    ],
    imageOnly: true,
    introduction:
      "In this lab session, I explored the Urban Atlas data for a Leuven, which provided detailed land use and land cover information. I analyzed the accessibility of green urban areas using two methods: buffer analysis, which involved creating 500m buffers around parks, and near analysis, which helped identify the closest green spaces to residential areas. Additionally, I performed an urban sprawl analysis by defining buffer zones around the city center and calculating the proportions of different land use types within each zone. Finally, I analyzed the population density by creating a raster layer representing population per hectare and summarized the population within each buffer zone, enabling a detailed assessment of urban characteristics.",
    description: [""],
    application:
      "The applicability of this analysis extends to urban planning, environmental management, and policymaking, as it provides valuable insights for improving the accessibility of urban green spaces, managing urban growth, and understanding the impact of population density on city planning and development strategies.",
    shortDescription:
      "The analysis of European Urban Atlas data reveals patterns of urban accessibility and sprawl, offering insights into land use and population distribution. ",
  },
  {
    id: "ac-5",
    name: "Spatial Data Quality and Data Aggregation",
    tools: "QGIS",
    data: "Crime Data of Estonia 2012, Administrative unit Estonia, Road network Estonia, City Name of Estonia",

    skill_gained: [
      "HeatMap analysis",
      "Density analysis",
      "Clustering",
      "Correlation analysis",
      "Python Visualization scripts",
      "Thematic map and interpretion of spatial patterns",
    ],
    src: [CrimeAdministrative, CrimePopulationDensity, HeatmapDensity],
    imageOnly: true,
    introduction:
      "In this lab, I focused on analyzing crime data and its correlation with population density. The first task involved importing the crime data into QGIS, defining the appropriate coordinate system, and reprojecting it to the Estonian National CRS. I explored the precision of the data, identifying privacy-based aggregation and examining crime incidents across different times (month, day, hour) and monetary damage. I then performed data conversions, such as extracting temporal features and reclassifying monetary damage into numerical categories. I visualized crime patterns and monetary damage using histograms in QGIS and Python. For the second task, I performed point density analysis by applying K-means clustering to group crime points into 300 clusters, representing areas of high crime density. I generated centroids for each cluster, visualized them using proportional symbols, and checked the population_admin_units dataset for topology issues, which I corrected. I then created thematic maps that combined clustered crime data with population density and used kernel density estimation (heatmaps) to visualize crime density. I also explored different aggregation methods to visualize crimes by administrative units using proportional symbols. Finally, in the third task, I performed a spatial join to associate crime incidents with administrative units and conducted a simple correlation analysis to explore the relationship between population density and crime. I created a scatter plot with a logarithmic scale to better interpret the correlation and added a trendline to assess the linear relationship between the two variables, interpreting how the relationship varied across different administrative units.",
    description: [""],
    shortDescription:
      "Crime point pattern analysis identifies high-crime areas and their link to population. These insights aid in crime prevention and resource optimization.",
  },

  {
    id: "ac-6",
    name: "Climate Data",
    tools: "QGIS",
    data: "Temperature Data, Precipitation Data, Elevation Data, Geographical Data, Solar Radiation Data",
    skill_gained: [
      "Spatial Analysis and Mapping",
      "Data Analysis and Interpretation",
      "Climate Science Understanding",
      "Data Visualization",
      "Technical Skills in Software",
    ],
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
    unique: true,
    description: [""],
    imageOnly: true,
    introduction:
      "I utilized geospatial and climate data to study temperature and precipitation patterns in Nepal. I collected and processed datasets related to climate variables such as temperature, precipitation, and solar radiation. Using GIS tools, I visualized these patterns spatially to identify regional and seasonal variations. I analyzed the influence of monsoons, topography, and altitude on these climate variables and examined the relationship between Nepal’s diverse landscapes and its climatic zones. The project involved creating thematic maps, interpreting seasonal trends, and comparing differences between regions, including the Mountainous, Hilly, and Terai areas. By integrating spatial and climate data, I aimed to provide a comprehensive understanding of the environmental factors that drive climate variability in Nepal.",
    shortDescription:
      "Analyzing climate data reveals patterns and relationships, enhancing understanding of climatic conditions and making insights more accessible.",
  },
  {
    id: "ac-7",
    name: "suitability analysis",
    tools: "QGIS, ArcGIS, ",
    data: "Digital Elevation Model (DEM), Slope, Stream Order, TWI (Topographic Wetness Index), Road Network, Population density, LandUse and LandCover",
    skill_gained: [
      "Spatial Data Analysis",
      "Hydrological Modelling",
      "Multi-Criteria Decision Analysis",
      "Data Integration and Visualization",
      "Suitability Index",
      "Analytical Hierarchy Process",
    ],
    introduction:
      "This project utilizes GIS-based suitability modeling to identify potential hydropower sites in Dolakha and Sindhupalchowk districts of Nepal, regions characterized by steep terrain, major rivers like Tamakoshi, Bhote Koshi, and Sunkoshi, and proximity to Kathmandu, making them ideal for hydropower development. potential,  The study relied on secondary data sources, including DEM for elevation, slope, stream order, and TWI, as well as data from OpenStreetMap, USGS, ICIMOD, and WorldPop, processed in QGIS to generate thematic layers for analysis. Using a combination of GIS and Analytical Hierarchy Process (AHP), factors such as stream order, slope, geology, LULC, TWI, road proximity, and population density were weighted, standardized, and combined into a suitability index map, which identified 120 high-potential dam sites covering areas over 100,000 square meters. The methodology effectively validated results against existing hydropower sites, but its reliance on subjective weight assignment and lack of dynamic environmental considerations posed limitations. Future advancements could incorporate hydrological models like HEC-RAS or SWAT and integrate machine learning for improved accuracy. The study demonstrates the effectiveness of AHP-GIS-based multi-criteria decision analysis for systematic and sustainable hydropower site selection in Nepal.",
    topic:
      "A Suitability modeling based on Geographic Information System for potential hydropower site in Dolakha and Sindhupalchowk District",
    imageOnly: true,
    src: [
      studyArea,
      Geology,
      Landuse,
      population_densitySus,
      roadNetwork,
      Slope,
      stream,
      TWI,
      suitabilityMap,
      possibleDam,
    ],
    description: [],
    shortDescription: "",
  },
  {
    id: "ac-8",
    name: "3D Model of Tartu City Center",
    topic: "3D Model of Tartu City Center",
    data: "LiDAR Data, Orthophoto, DSM (Digital Surface Model), DHM (Digital Height Model)",
    tools: "ArcGIS",
    skill_gained: [
      "LiDAR Data Handling",
      "Creating 3D Features",
      "Building Footprint Creation",
      "Multipatch Creation",
      "Height Attribution",
    ],
    introduction:
      "In this lesson, I worked on creating a detailed 3D city model of Tartu using LiDAR elevation data. The goal was to understand the importance of LiDAR data in creating 3D models and products, specifically focusing on creating 3D building models. I explored how to classify LiDAR points, manipulate data, and create 3D building features using various tools in ArcGIS Pro. This task involved handling LiDAR data, creating rasters, regularizing building footprints, adding height attributes to polygons, and transforming them into multipatch 3D models for visualization.",
    src: [threeD, lidar],
    description: [""],
    shortDescription: "",
    imageOnly: true,
  },
  {
    id: "ac-9",
    tools: "ArcGIS, 3D Extrusion Tools",
    topic: "Landscape modelling of Estonia Topography",
    data: "LiDar Data, ETAK Data",
    name: "Landscape modelling",
    skill_gained: [
      "3D Visualization Techniques",
      "Data Clipping and Processing",
      "LiDAR Data Handling",
      "Height Attribution",
      "Viewshed Analysis",
    ],
    src: [landscape, visibility],
    description: [""],
    shortDescription: "",
    imageOnly: true,
    introduction:
      "In this lab, I have worked on creating 3D landscape visualizations using ArcGIS Pro. The workflow involved processing various datasets such as LiDAR DEMs, topographic maps, and vector layers for buildings, roads, and forests. I began by preparing and clipping the necessary data layers, followed by adding them into a new 3D scene. I then set the appropriate elevation properties for each layer, ensuring accurate vertical positioning. To enhance the visualization, I extruded building and forest layers to their corresponding heights, applied appropriate relief exaggeration, and used the extrusion technique to visualize point, line, and polygon features in 3D. Additionally, I performed a viewshed analysis from a planned bird-watching tower to assess visibility across the landscape. This lab has helped me develop skills in 3D modeling, elevation analysis, and visualization, providing me with valuable experience in creating realistic landscape models for environmental management.",
  },
];

export const ProfessionalWorkDetail: ProjectDetailtemp[] = [
  {
    id: "pw-1",
    name: "IOM Migration movement visualization between India and Nepal",
    src: [IOM],
    link: "https://iom-dtm.naxa.com.np/",
    description: [""],
    shortDescription: "",
  },
  {
    id: "pw-2",
    name: "PlantSat",
    src: [PlantSat],
    link: "https://beema.plantsat.com/login",
    description: [""],
    shortDescription: "",
  },
  {
    id: "pw-3",
    name: "City Yatri",
    src: [cityYatri1, cityYatri2, cityYatri3],
    description: [""],
    link: "https://play.google.com/store/apps/details?id=com.agtech.city_yatra&hl=en",
    shortDescription: "",
  },
  {
    id: "pw-4",
    name: "Eco App",
    src: [Ecoapp1, Ecoapp2, Ecoapp3],
    description: [""],
    link: "https://play.google.com/store/apps/details?id=com.agtech.ecoapp&hl=en",
    shortDescription: "",
  },
  {
    id: "pw-4",
    name: "DealMap",
    src: [DealMaps1, DealMaps2, DealMaps3],
    link: "https://play.google.com/store/apps/details?id=com.agtech.dealsnepal&hl=en",
    description: [""],
    shortDescription: "",
  },
  {
    id: "pw-5",
    name: "EWS",
    src: [EWS1, EWS2, EWS3],
    description: [""],
    shortDescription: "",
  },
];
