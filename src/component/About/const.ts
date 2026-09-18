import CSS from "./svg/css.svg";
import html from "./svg/html.svg";
import react from "./svg/react.svg";
import tailwindcss from "./svg/tailwindcss.svg";
import typescript from "./svg/typescript.svg";
import qgis from "./svg/qgis.svg";
import python from "./svg/python.svg";
import postgresql from "./svg/postgresql.svg";
import next from "./svg/next.svg";
import linux from "./svg/linux.svg";
import javaScript from "./svg/javascript.svg";
import git from "./svg/git.svg";
import redis from "./svg/redis.svg";
import docker from "./svg/docker.svg";
import pytorch from "./svg/pytorch.svg";
import tensorflow from "./svg/tensorflow.svg";
import {
  SiR,
  SiScikitlearn,
  SiGdal,
  SiDjango,
  SiKubernetes,
  SiGoogleearthengine,
} from "react-icons/si";
import orthophoto from "./svg/orthophoto.svg";
import postGis from "./svg/post_gis.svg";
import remoteSensing from "./svg/remote_sensing.svg";
import uav from "./svg/uav.svg";
import aws from "./svg/aws.svg";
import cicd from "./svg/CICD.svg";
import computerVision from "./svg/computer-vision.svg";
import visionTransformer from "./svg/vision_transformer.svg";
import etl from "./svg/etl.svg";
import geodjango from "./svg/geodjango.svg";
import geoserver from "./svg/geoserver.svg";
import hpc from "./svg/hpc.svg";
import nodejs from "./svg/nodejs.svg";
import arcgis from "./svg/arcgis.svg";
import GEM from "./svg/gem-logo.jpg";
import Nepallogo from "./svg/nepal_logo.png";
// export const Skills = [
//   { name: "HTML", icon: html },
//   { name: "CSS", icon: CSS },
//   { name: "ArcGIS pro", icon: arcgis },
//   { name: "QGIS", icon: qgis },
//   { name: "Tailwindcss", icon: tailwindcss },
//   { name: "Typescript", icon: typescript },
//   { name: "JavaScript", icon: javaScript },
//   { name: "Python", icon: python },
//   { name: "PostgreSQL", icon: postgresql },
//   { name: "git", icon: git },
//   { name: "redis", icon: redis },
//   { name: "Docker", icon: docker },
//   { name: "NodeJs", icon: nodejs },
//   { name: "React", icon: react },
//   { name: "Next", icon: next },
//   { name: "Linux", icon: linux },
// ];

export const SkillGroups = [
  {
    name: "Programming Languages",
    items: [
      { name: "Python", icon: python },
      { name: "Typescript", icon: typescript },
      { name: "JavaScript", icon: javaScript },
      { name: "R", IconComponent: SiR },
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      { name: "PyTorch", icon: pytorch },
      { name: "Tensorflow", icon: tensorflow },
      { name: "Scikit-learn", IconComponent: SiScikitlearn },
      { name: "Computer Vision", icon: computerVision },
      { name: "Vision Transformer", icon:visionTransformer },
    ],
  },
  {
    name: "Remote Sensing & Earth Observation",
    items: [
      { name: "Remote Sensing (optical / Radar)", icon: remoteSensing },
      { name: "GDAL", IconComponent: SiGdal },
      { name: "Rasterio" },
      { name: "Orthophotos", icon: orthophoto },
      { name: "UAV imagery", icon: uav },
      { name: "GEE", IconComponent: SiGoogleearthengine },
    ],
  },
  {
    name: "GIS & Geospatial",
    items: [
      { name: "ArcGIS pro", icon: arcgis },
      { name: "QGIS", icon: qgis },
      { name: "PostGIS", icon: postGis },
      { name: "Geoserver", icon: geoserver },
    ],
  },
  {
    name: "Web Development",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: CSS },
      { name: "Tailwindcss", icon: tailwindcss },
      { name: "React", icon: react },
      { name: "Next", icon: next },
      { name: "NodeJs", icon: nodejs },
      { name: "Django", IconComponent: SiDjango },
      { name: "GeoDjango", icon: geodjango },
    ],
  },
  {
    name: "Infrastructure & DevOps",
    items: [
      { name: "git", icon: git },
      { name: "Docker", icon: docker },
      { name: "Kubernetes", IconComponent: SiKubernetes },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Redis", icon: redis },
      { name: "AWS", icon: aws },
      { name: "SLURM" },
      { name: "HPC", icon: hpc },
      { name: "CI/CD", icon: cicd },
      { name: "ETL pipeline", icon: etl },
      { name: "Linux", icon: linux },
    ],
  },
];

// export const country = [
//   { name: "English", flag: UK },
//   { name: "French", flag: France },
//   { name: "Dutch", flag: Netherland },
//   { name: "Swedish", flag: Sweden },
//   { name: "Norwegian", flag: Norway },
//   { name: "Estonian", flag: Estonia },
//   { name: "German", flag: Germany },
//   { name: "Finnish", flag: Finland },
// ];

export const achivements = [
  {
    name: "Erasmus Mundus Joint Master Degree (EMJMD)",
    short_description: "GEM Intake 2024",
    description:
      "Partner Country Erasmus+ scholarship for the MSc degree programme in Geo-Information Science and Earth Observation for Environmental Modelling and Management (GEM) in Track 2: Land Use Systems.",
    icon: GEM,
  },
  {
    name: "Nepal Government Scholarship",
    short_description: "Geomatics Engineering 2018",
    description:
      "Awarded a 35% scholarship by the Nepal Government for the undergraduate program (2018-2023).",
    icon: Nepallogo,
  },
];
