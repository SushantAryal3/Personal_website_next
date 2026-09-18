export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
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
    lat: 50.6667,
    lon: 4.6136,
    period: "June 2026 – July 2026",
    description:
      "Applied a field-boundary delineation model developed in my thesis to generate 2026 agricultural field boundary maps for the Wallonia region, fusing Sentinel-1 and Sentinel-2 time series to support regional-scale delineation.",
  },
  {
    role: "Geospatial AI Internship",
    company: "Estonian Land and Spatial Development Board",
    location: "Tartu, Estonia",
    lat: 58.3776,
    lon: 26.729,
    period: "May 2025 – Aug 2025",
    description:
      "Built reproducible raster processing pipelines with Python, GDAL and Rasterio, and automated spatial data validation across large orthophoto datasets in a Linux-based, containerised environment. Ran large-scale GIS analysis on national aerial imagery to support renewable-energy siting and land-use decisions.",
  },
  {
    role: "GIS Developer",
    company: "PlantSat",
    location: "Kathmandu, Nepal",
    lat: 27.7172,
    lon: 85.324,
    period: "May 2023 – Aug 2024",
    description:
      "Configured and maintained GeoServer to publish OGC-compliant WMS/WFS services, designed and managed PostgreSQL/PostGIS databases with spatial indexing and geometry validation, and built Python/REST API automation workflows delivering analysis-ready GIS layers to cross-functional teams.",
  },
  {
    role: "WebGIS Developer Internship",
    company: "Naxa Pvt. Ltd",
    location: "Kathmandu, Nepal",
    lat: 27.7172,
    lon: 85.324,
    period: "March 2023 – April 2023",
    description:
      "Integrated multi-source spatial datasets into a unified mapping platform and built an interactive web map visualising migrant mobility data. Designed WebGIS dashboards with React, OpenLayers and MapLibre GL to communicate spatial patterns to non-technical stakeholders.",
  },
];

export function latLonToVector3(
  lat: number,
  lon: number,
  radius: number
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return [x, y, z];
}
