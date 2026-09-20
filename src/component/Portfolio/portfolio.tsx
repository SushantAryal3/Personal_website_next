"use client";
import React, { useEffect, useState } from "react";
import { AcademicprojectDetail, ProjectDetailtemp } from "./work";

import Image from "next/image";
import Slider from "@/component/ImageSlider/slider";

const DotGrid = () => (
  <span className="grid grid-cols-2 gap-1">
    <span className="w-1.5 h-1.5 bg-black inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
  </span>
);

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: ProjectDetailtemp;
  index: number;
  onOpen: (project: ProjectDetailtemp) => void;
}) => {
  const image = project.src[0];
  const description = project.shortDescription || project.topic || "";
  const tags = (project.skill_gained || []).slice(0, 3);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex flex-col text-left overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={project.name}
          src={image}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">
            {String(index).padStart(2, "0")}
          </span>
          <DotGrid />
        </div>
        <h3 className="text-xl md:text-2xl leading-snug">{project.name}</h3>
        {description && (
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest uppercase border border-black/20 bg-[#e9dfd0] px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectDetailtemp;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg border border-black/15 bg-[#f2e9e4] p-6 md:p-10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border border-black/30 text-lg hover:bg-black hover:text-white transition-colors"
        >
          ×
        </button>

        <div className="text-2xl md:text-3xl leading-snug pr-12">{project.topic}</div>

        {project.singleImage && (
          <div className="flex justify-center items-center mt-6">
            <Image
              alt={project.name}
              src={project.src[0]}
              className="rounded-lg w-full max-w-3xl h-auto object-cover"
            />
          </div>
        )}

        {project.tools && (
          <div className="mt-6 flex gap-2">
            <div className="font-medium">Tools used:</div>
            <div>{project.tools}</div>
          </div>
        )}
        {project.data && (
          <div className="mt-2 flex gap-2">
            <div className="font-medium">Data used:</div>
            <div>{project.data}</div>
          </div>
        )}
        {project.skill_gained && project.skill_gained.length > 0 && (
          <div className="mt-4">
            <div className="font-medium mb-1">Skill Gained:</div>
            <div className="flex flex-wrap gap-2">
              {project.skill_gained.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] tracking-widest uppercase border border-black/20 bg-[#e9dfd0] px-2 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.introduction && (
          <p className="text-justify text-gray-700 leading-relaxed mt-5">
            {project.introduction}
          </p>
        )}

        {project.link && (
          <div className="mt-6">
            <div className="font-medium mb-2">Explore the project</div>
            <iframe src={project.link} width="100%" height="500" className="border border-black/15 rounded-lg" />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Open the app in new tab
            </a>
          </div>
        )}

        {project.imageOnly && (
          <div className="mt-6">
            <div className="font-medium mb-2">Outcome:</div>
            <Slider image={project.src} />
          </div>
        )}

        {project.application && (
          <p className="text-gray-700 leading-relaxed mt-4">{project.application}</p>
        )}
      </div>
    </div>
  );
};

const INITIAL_COUNT = 3;

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetailtemp | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? AcademicprojectDetail
    : AcademicprojectDetail.slice(0, INITIAL_COUNT);

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
                PORTFOLIO
              </span>
            </div>
            <div className="text-3xl md:text-5xl relative bg-[#f2e9e4] md:pl-6 py-2 -my-2">
              Selected work
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90vw] max-w-[80vw] mx-auto pb-16 md:pb-24 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {AcademicprojectDetail.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 text-xs md:text-sm tracking-widest uppercase border border-black/30 rounded-full text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Portfolio;
