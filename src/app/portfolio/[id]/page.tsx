import Link from "next/link";
import { AcademicprojectDetail, ProfessionalWorkDetail } from "../work";
import Image from "next/image";
import Slider from "@/component/ImageSlider/slider";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const combine = [...AcademicprojectDetail, ...ProfessionalWorkDetail];
  const project = combine.find((p: any) => p.id === id)!;

  return (
    <div className="mt-6">
      <div className="w-[82vw] mx-auto">
        <div className="font-[Raleway] text-3xl relative mb-5">
          {project.topic}
        </div>
        {project?.singleImage && (
          <div className="flex justify-center items-center">
            <Image
              alt={"Remote sensing project Image"}
              src={project.src[0]}
              className="block mx-auto w-[50vw] h-[50vh] object-cover"
            />
          </div>
        )}
        <div className="mt-5 flex gap-2">
          <div className="font-bold">Tools used:</div>
          <div className="">{project.tools}</div>
        </div>
        <div className="mt-5 flex gap-2">
          <div className="font-bold">Data used:</div>
          <div className="">{project.data}</div>
        </div>
        <div className="mt-5 flex gap-2">
          <div className="font-bold">Skill Gained:</div>
          <div>
            {project.skill_gained &&
              project.skill_gained.map((skill) => {
                return <div>{skill}</div>;
              })}
          </div>
        </div>
        <div className="text-justify mt-5">{project.introduction}</div>
        {project?.link && (
          <div>
            <div className="font-bold mt-5">Explore the project</div>
            <iframe src={project?.link} width="100%" height="600px"></iframe>
            <a href={project?.link} className="pt-9 text-blue-500">
              Open the app in new tab
            </a>
          </div>
        )}
        <div className="mt-5 font-bold text-justify">Outcome:</div>
        {project.imageOnly && <Slider image={project.src} />}
        <div>{project?.application}</div>
      </div>
    </div>
  );
}
