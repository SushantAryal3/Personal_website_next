import type { StaticImageData } from "next/image";
import ucLouvainLogo from "./image/UCLouvain_logo.svg";
import tartuLogo from "./image/Tartu_.png";
import kathmanduLogo from "./image/Kathmandu.svg";
import gemLogo from "./image/GEM.svg";
import gem1Logo from "./image/GEM_1.svg";

export type EducationItem = {
  number: string;
  degree: string;
  yearNote?: string;
  institution: string;
  location: string;
  period: string;
  scholarship: string;
  grade: string;
  textSide: "left" | "right";
  universityLogo: StaticImageData;
  gemLogos?: [StaticImageData, StaticImageData];
};

export const education: EducationItem[] = [
  {
    number: "01",
    degree:
      "Msc. Geoinformation Science and Earth Observation for Environmental Modelling and Management",
    yearNote: "Second year of the double degree.",
    institution: "Université catholique de Louvain",
    location: "Louvain-la-Neuve, Belgium",
    period: "2025 – 2026",
    scholarship: "Erasmus Mundus Joint Master Degree Scholarship",
    grade: "16.19 / 20 · 60 ECTS",
    textSide: "left",
    universityLogo: ucLouvainLogo,
    gemLogos: [gemLogo, gem1Logo],
  },
  {
    number: "02",
    degree:
      "Msc. Geoinformation Science and Earth Observation for Environmental Modelling and Management",
    yearNote: "First year of the double degree.",
    institution: "University of Tartu",
    location: "Tartu, Estonia",
    period: "2024 – 2025",
    scholarship: "Erasmus Mundus Joint Master Degree Scholarship",
    grade: "4.38 / 5 · 82 ECTS",
    textSide: "right",
    universityLogo: tartuLogo,
    gemLogos: [gemLogo, gem1Logo],
  },
  {
    number: "03",
    degree: "B.E. Geomatics Engineering",
    institution: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    period: "2018 – 2023",
    scholarship: "Nepal Government Scholarship",
    grade: "3.71 / 4.00 CGPA · 151 Credit Hours",
    textSide: "left",
    universityLogo: kathmanduLogo,
  },
];
