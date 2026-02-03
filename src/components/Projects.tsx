import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import type {Project} from './ProjectCard';

import proyecto2 from '../assets/proyecto2.png';

interface ProjectsCarouselProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
}

const defaultProjects: Project[] = [
  { id: 1, 
    title: 'Cafecultor',
    description: 'Projecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 },
    { id: 2, 
    title: 'Cafecultor',
    description: 'Projecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 },
    { id: 3, 
    title: 'Cafecultor',
    description: 'Projecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 },
    { id: 4, 
    title: 'Cafecultor',
    description: 'Projecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 },
    { id: 5, 
    title: 'Cafecultor',
    description: 'Projecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 },
    { id: 6, 
    title: 'Cafecultor',
    description: 'Projecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 }
];

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ 
  projects = defaultProjects,
  onProjectClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= projects.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 
        ? Math.floor(projects.length / itemsPerPage) * itemsPerPage 
        : prevIndex - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Nuestros proyectos
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 transition-colors duration-300 shadow-lg"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onClick={onProjectClick}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 transition-colors duration-300 shadow-lg"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a la página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;