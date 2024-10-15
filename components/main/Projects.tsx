import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/solar.jpg"
          title="Solar Marketplace"
          description="Solar Marketplace is aWeb-based platform that allows users to search, compare, and purchase solar panels, accessories, and services from various providers, offering a seamless and efficient solution for transitioning to renewable energy.

          #HTML & CSS #nodejs #javascript"
        />
        <ProjectCard
          src="/derma.png"
          title="Elevate Discernable Over Formation Retardant in Neural Network"
          description="Developed a web-based platform utilizing neural network models for providing enhanced diagnostic and tracking capabilities. Integrated features for doctors to analyze patient data, lab assistants to upload reports, and patients to track their health progress.

          #HTML & CSS #javascript #python"
        />
        <ProjectCard
          src="/face.png"
          title="Automated Face Recognition Attendance System"
          description="Web-based solution for automating attendance tracking using facial recognition technology, streamlining the attendance process for educational institutions and workplaces.
          #python #opencv #machine learning"
        />
      </div>
    </div>
  );
};

export default Projects;
