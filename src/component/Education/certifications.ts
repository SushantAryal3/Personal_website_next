import type { StaticImageData } from "next/image";
import backendPage from "./photos/backend_page.jpg";
import cartography from "./photos/cartography.jpg";
import dataScience from "./photos/data_science.jpg";
import deepLearning from "./photos/Deep_Learning.jpg";
import excel from "./photos/Excel.jpg";
import frontendDevelopment from "./photos/frontend_development.jpg";
import git from "./photos/Git.jpg";
import machineLearning from "./photos/machine_learning.jpg";
import toronto from "./photos/toronto.jpg";
import uc from "./photos/UC.jpg";
import R from "./photos/R.jpg";
import FME from "./photos/FME.jpg";
import Pytorch from "./photos/pytorch.jpg";
import UAV from "./photos/UAV.jpg";
import Node from "./photos/node.jpg";
import RS from "./photos/RS_Tartu.jpg";
import NEC from "./photos/NEC.jpg";
export type Certification = {
  src: StaticImageData;
  title: string;
  link: string;
};

export const certificationsRowOne: Certification[] = [
  { src: toronto, title: "GIS & Spatial Analysis", link: "https://www.coursera.org/account/accomplishments/specialization/certificate/NSTPHZDG75E8" },
  { src: uc, title: "GIS Specialization", link:"https://www.coursera.org/account/accomplishments/specialization/certificate/KWV7SSYEZ75Q" },
  {src:RS, title:"Remote Sensing", link:"https://drive.google.com/file/d/1Yrn1aOrD-iHv_X8tIbHVLlZjxsMb_gP9/view?usp=sharing"},
  {src: FME, title:"FME", link:"https://drive.google.com/drive/u/1/folders/1bFJGLPxswP-DpOYbTbKqdg_bzvkSyb9R" },
  {src: UAV, title:"UAV Mapping", link:"https://www.geoversity.io/profile/course-certificate/1929486/sushant-aryal/"},
  {src: NEC, title:"NEC Engineer Registration", link:"https://drive.google.com/file/d/1Us0GAT37yyY2BxjKNgHsCsm3Hs_SPfk8/view?usp=sharing"},
  { src: cartography, title: "Cartography", link:"https://drive.google.com/file/d/15KcId5KyhxzGu0PlMnTdffavOonUQBE3/view" },
  { src: dataScience, title: "Spatial Data Science", link:"https://www.esri.com/en-us/training/TrainingRecord/Certificate/sushant564/66dff6fd87dd05001ef56053/-180" },
];

export const certificationsRowTwo: Certification[] = [
  { src: deepLearning, title: "Deep Learning", link:"https://www.coursera.org/account/accomplishments/specialization/YYCT18K0W7Z6" },
  { src: machineLearning, title: "Machine Learning", link:"https://www.coursera.org/account/accomplishments/specialization/5FTJW4R89KXC" },
  {src: R, title: "R Programming", link:"https://www.udemy.com/certificate/UC-91e1e34b-05b8-4aa2-991b-b648d0545661/"},
  {src: Pytorch, title:"PyTorch", link:"https://www.udemy.com/certificate/UC-867090b6-0aae-4416-8285-95c54fba34e6/"},
  { src: excel, title: "Excel Skills", link:"https://www.coursera.org/account/accomplishments/specialization/certificate/BE22XNPYBL42" },
  {src:Node, title:"Node.js", link:"https://www.udemy.com/certificate/UC-3a78a091-4958-4004-8197-310e41b41186/"},
  { src: git, title: "Git", link:"https://www.coursera.org/account/accomplishments/certificate/N96TZYMXZWWH" },
];
