import Link from "next/link";
import { projectDetail, ProjectDetailtemp } from "../work";
import Carousel from "@/component/Caurosel/caurosel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photos: ProjectDetailtemp = projectDetail.find((p) => p.id === id)!;

  return (
    <div>
      <div className="px-5 pb-4 pt-4 mb-8 flex justify-between items-center shadow-md sticky top-0 bg-white z-10">
        <Link key={id} href={`/portfolio/`} className="group relative">
          <ArrowBackIosIcon />
        </Link>
        <div className="font-[Raleway] text-3xl relative bg-[#fafafa]">
          {photos.name}
        </div>
      </div>

      <div className="w-[50vw]">
        <Carousel images={photos.src} discription={photos.description} />
      </div>
    </div>
  );
}
