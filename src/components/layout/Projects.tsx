import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import type {Project} from '../ui/ProjectCard';

import proyecto2 from '../../assets/proyecto2.png';
import velocity from '../../assets/velocity.png';
import ecowave from '../../assets/ecowave.png';
import ecovita from '../../assets/ecovita.png';

interface ProjectsCarouselProps {
  projects?: Project[];
  onProjectClick?: (project: Project) => void;
}

const defaultProjects: Project[] = [
  { 
    id: 1, 
    title: 'Cafecultor',
    description: 'Proyecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 
  },
  { 
    id: 2, 
    title: 'Velocity',
    description: 'Proyecto de Branding para una nueva red social',
    imageUrl: velocity 
  },
  { 
    id: 3, 
    title: 'EcoWave',
    description: 'Proyecto de Desarrollo Web para una ONG de medioambiente',
    imageUrl: ecowave 
  },
  { 
    id: 4, 
    title: 'Ecovita',
    description: 'Proyecto de Diseño Digital para una marca de productos ecológicos',
    imageUrl: ecovita
  },
  { 
    id: 5, 
    title: 'Cafecultor',
    description: 'Proyecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 
  },
  { 
    id: 6, 
    title: 'Cafecultor',
    description: 'Proyecto de Diseño Web y Branding para una cafetería',
    imageUrl: proyecto2 
  }
];

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects = defaultProjects,
  onProjectClick
}) => {

  const getItemsPerPage = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? (totalPages - 1) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);
  const goToPage = (pageIndex: number) => { setCurrentIndex(pageIndex * itemsPerPage); };

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 my-12 md:my-16 rounded-3xl shadow-2xl w-full max-w-7xl mx-auto dark:bg-dark-white">
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 md:mb-12">
          Nuestros proyectos
        </h2>
      
        <div className="relative px-8 sm:px-12 md:px-16">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 shadow-lg transition-colors"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onClick={onProjectClick}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 shadow-lg transition-colors"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-black w-8' 
                  : 'w-3 bg-grey'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;