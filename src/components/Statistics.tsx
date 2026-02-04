import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatCard from './StatCard';
import type { Stat } from './StatCard';

interface StatisticsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    id: 1,
    number: '500+',
    label: 'Proyectos Completados',
    description: 'Hemos trabajado en más de 500 proyectos exitosos'
  },
  {
    id: 2,
    number: '200+',
    label: 'Clientes Satisfechos',
    description: 'Más de 200 empresas confían en nosotros'
  },
  {
    id: 3,
    number: '15+',
    label: 'Años de Experiencia',
    description: 'Más de una década en el mercado'
  },
  {
    id: 4,
    number: '98%',
    label: 'Tasa de Satisfacción',
    description: 'Nuestros clientes nos recomiendan'
  }
];

const Statistics: React.FC<StatisticsProps> = ({ stats = defaultStats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(stats.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= stats.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.floor(stats.length / itemsPerPage) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const visibleStats = stats.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Estadísticas
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 transition-colors duration-300 shadow-lg"
            aria-label="Estadística anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Stats Grid */}
          <div className="space-y-8">
            {visibleStats.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                variant={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 transition-colors duration-300 shadow-lg"
            aria-label="Estadística siguiente"
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

export default Statistics;