export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  country: string;
  lat: number;
  lon: number;
  period: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    role: "Student Job",
    company: "Earth and Life Institute, Université catholique de Louvain",
    location: "Louvain-la-Neuve, Belgium",
    country: "Belgium",
    lat: 50.6683,
    lon: 4.6144,
    period: "June 2026 – July 2026",
    description:
      "Applied a field-boundary delineation model developed in my thesis to generate 2026 agricultural field boundary maps for the Wallonia region, fusing Sentinel-1 and Sentinel-2 time series to support regional-scale delineation.",
  },
  {
    role: "Geospatial AI Internship",
    company: "Estonian Land and Spatial Development Board",
    location: "Tartu, Estonia",
    country: "Estonia",
    lat: 58.378,
    lon: 26.7285,
    period: "May 2025 – Aug 2025",
    description:
      "Built reproducible raster processing pipelines with Python, GDAL and Rasterio, and automated spatial data validation across large orthophoto datasets in a Linux-based, containerised environment. Ran large-scale GIS analysis on national aerial imagery to support renewable-energy siting and land-use decisions.",
  },
  {
    role: "GIS Developer",
    company: "PlantSat",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    lat: 27.7,
    lon: 85.33,
    period: "May 2023 – Aug 2024",
    description:
      "Configured and maintained GeoServer to publish OGC-compliant WMS/WFS services, designed and managed PostgreSQL/PostGIS databases with spatial indexing and geometry validation, and built Python/REST API automation workflows delivering analysis-ready GIS layers to cross-functional teams.",
  },
  {
    role: "WebGIS Developer Internship",
    company: "Naxa Pvt. Ltd",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    lat: 27.7,
    lon: 85.33,
    period: "March 2023 – April 2023",
    description:
      "Integrated multi-source spatial datasets into a unified mapping platform and built an interactive web map visualising migrant mobility data. Designed WebGIS dashboards with React, OpenLayers and MapLibre GL to communicate spatial patterns to non-technical stakeholders.",
  },
];
