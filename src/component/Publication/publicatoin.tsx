import topography from "@/component/Portfolio/photos/topography.png";

const DotGrid = () => (
  <span className="grid grid-cols-2 gap-1">
    <span className="w-1.5 h-1.5 bg-black inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
  </span>
);

const thesis = {
  title:
    "Comparative Evaluation of Sentinel-1, Sentinel-2, and Fused Time Series for Agricultural Field Boundary Delineation Using Deep Learning",
  supervisors: "Prof. Pierre Defourny, Quentin Deffense",
  type: "Master Thesis",
  points: [
    "Adapted PTAViT3D, a 3D Vision Transformer leveraging joint spatio-temporal attention, for multi-task agricultural field boundary delineation",
    "Extended the framework with Sentinel-1 interferometric coherence alongside backscatter, exploiting phenology-sensitive SAR features for crop boundary discrimination",
    "Compared single-sensor (S2 cloud-free, S2 partially cloudy, S1 backscatter + coherence) and fused S1/S2 cross-attention configurations against reference datasets",
  ],
  github: "https://github.com/SushantAryal3/Master-Thesis",
};

export default function Publication() {
  return (
    <div className="relative w-full pt-10 bg-[#f2e9e4]">
      <div
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-rigth bg-[length:140%] md:bg-[length:65%]"
        style={{
          backgroundImage: `url("${topography.src}")`,
          opacity: 0.45,
        }}
      />
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
                PUBLICATION
              </span>
            </div>
            <div className="text-3xl md:text-5xl relative bg-[#f2e9e4] md:pl-6 py-2 -my-2">
              My research
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90vw] max-w-[80vw] mx-auto pb-16 md:pb-24 relative z-10">
        <div className="py-5 md:py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="border border-black/30 text-xs px-2 py-1">01</span>
              <span className="text-[10px] tracking-widest uppercase border border-black/20 bg-[#e9dfd0] px-2 py-1">
                {thesis.type}
              </span>
            </div>
            <DotGrid />
          </div>
          <div className="text-2xl md:text-3xl leading-snug">{thesis.title}</div>
          <div className="mt-3 text-base md:text-lg text-gray-700">
            <span className="font-medium text-gray-900">Supervisors: </span>
            {thesis.supervisors}
          </div>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed md:text-lg list-disc pl-5">
            {thesis.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a
            href={thesis.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2 text-xs md:text-sm tracking-widest uppercase border border-black/30 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
