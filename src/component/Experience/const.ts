export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  country: string;
  lat: number;
  lon: number;
  period: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Student Assistant",
    company: "Earth and Life Institute, Université catholique de Louvain",
    location: "Louvain-la-Neuve, Belgium",
    country: "Belgium",
    lat: 50.6683,
    lon: 4.6144,
    period: "June 2026 – July 2026",
    points: [
      "Applied the field-boundary delineation model developed in my thesis to generate 2026 agricultural field boundary maps for the Wallonia region",
      "Processed and fused Sentinel-2 time series data for the Walloon agricultural landscape to support regional-scale delineation",
    ],
  },
  {
    role: "Geospatial AI Research Internship",
    company: "Estonian Land and Spatial Development Board",
    location: "Tartu, Estonia",
    country: "Estonia",
    lat: 58.378,
    lon: 26.7285,
    period: "May 2025 – Aug 2025",
    points: [
      "Built a U-Net segmentation pipeline with a ResNet backbone for solar panel detection across aerial imagery, including spatial accuracy assessment of model predictions against ground reference data",
      "Researched building height estimation from oblique imagery, using heatmap-based window detection as a structural cue for floor-count inference",
      "Designed reproducible Python geospatial pipelines (PyTorch, GDAL, Rasterio, NumPy) for large-scale raster processing across national aerial imagery datasets",
    ],
  },
  {
    role: "GIS Developer",
    company: "PlantSat",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    lat: 27.7,
    lon: 85.33,
    period: "May 2024 – Aug 2024",
    points: [
      "Built server-side geospatial pipelines for a satellite-based agricultural monitoring platform, integrating satellite data, vegetation indices, and field-level analytics",
      "Managed and processed vector and raster geospatial data using PostGIS, GDAL, and GeoPandas, including database design and spatial indexing",
      "Developed GIS data services and APIs with geometry validation, spatial filtering, and export functionality for large-scale geospatial datasets",
    ],
  },
  {
    role: "WebGIS Developer Internship",
    company: "Naxa Pvt. Ltd",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    lat: 27.7,
    lon: 85.33,
    period: "March 2023 – April 2023",
    points: [
      "Integrated multi-source spatial datasets into a unified mapping platform and built an interactive web map",
      "Designed WebGIS dashboards with React, OpenLayers and MapLibre GL to communicate spatial patterns to non-technical stakeholders",
    ],
  },
];
