import Image, { type StaticImageData } from "next/image";
import erasmusLogo from "./Erasmus+_Logo.svg";
import nepalEmblem from "./Emblem_of_Nepal.svg";

const DotGrid = () => (
  <span className="grid grid-cols-2 gap-1">
    <span className="w-1.5 h-1.5 bg-black inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
  </span>
);

type AwardItem = {
  title: string;
  issuer: string;
  period: string;
  amount: string;
  description: string;
  logo: StaticImageData;
};

const awards: AwardItem[] = [
  {
    title: "Erasmus Mundus Joint Master Degree Scholarship",
    issuer: "European Commission",
    period: "2024 – 2026",
    amount: "€48,400",
    description:
      "Full scholarship covering tuition, travel, and living costs for the double MSc in Geoinformation Science and Earth Observation for Environmental Modelling and Management, studied at the University of Tartu and UCLouvain.",
    logo: erasmusLogo,
  },
  {
    title: "Nepal Government Scholarship",
    issuer: "Government of Nepal",
    period: "2018 – 2023",
    amount: "~$2,421",
    description:
      "Merit-based scholarship awarded for the B.E. in Geomatics Engineering at Kathmandu University.",
    logo: nepalEmblem,
  },
];

const Award = () => {
  return (
    <div className="relative w-full pt-10 bg-[#f2e9e4]">
      <div className="relative">
        <div className="w-[90vw] max-w-[80vw] mx-auto bg-[#f2e9e4] py-12 md:py-16">
          <div className="hidden md:block absolute z-20 left-[27.6%] -translate-x-1/2 top-0 bottom-0 w-[2px] h-[20vh] bg-black/15 pointer-events-none" />
          <div className="hidden md:block w-full h-[2px] bg-black/15 relative mb-10">
            <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-[2px] bg-black" />
            <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-20 bg-black" />
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[22%_1fr] md:gap-0">
            <div className="relative bg-[#f2e9e4] py-2 -my-2 inline-block w-fit md:block md:w-full">
              <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
                <span className="w-1.5 h-1.5 bg-black inline-block text-3xl" />
                AWARDS
              </span>
            </div>
            <div className="text-3xl md:text-5xl relative bg-[#f2e9e4] md:pl-6 py-2 -my-2">
              Scholarships I&apos;ve earned
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90vw] max-w-[80vw] mx-auto pb-16 md:pb-24 relative z-10">
        <div className="divide-y divide-black/15">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className="py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-6 lg:grid lg:grid-cols-[1fr_16rem] lg:gap-10"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4 md:justify-start md:gap-4">
                  <span className="border border-black/30 text-xs px-2 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <DotGrid />
                </div>
                <div className="text-2xl md:text-3xl leading-snug">{award.title}</div>
                <div className="mt-2 text-base md:text-lg text-gray-700 flex flex-wrap items-center gap-2">
                  <span>{award.issuer}</span>
                  <span className="w-1 h-1 bg-black/40 inline-block rounded-full" />
                  <span>{award.period}</span>
                </div>
                <div className="mt-3 text-base md:text-lg">
                  <span className="font-medium text-gray-900">Amount: </span>
                  {award.amount}
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed md:text-lg">
                  {award.description}
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-full lg:h-40 mx-auto">
                <Image
                  src={award.logo}
                  alt={award.issuer}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
