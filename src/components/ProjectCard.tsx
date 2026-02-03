import React from 'react';

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="flex flex-col"
      onClick={() => onClick?.(project)}
    >
      {/* Image Container */}
      <div className=" bg-light-blue rounded-lg  items-center justify-center overflow-hidden group cursor-pointer ">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <p>La imagen no está disponible</p>
        )}
      </div>

      <h2 className="text-3xl font-bold text-black mt-4 text-center">{project.title}</h2>
      <p className="text-gray-700 mt-2 text-center">{project.description}</p>
    </div>
  );
};

export default ProjectCard;