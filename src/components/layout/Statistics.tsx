import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatCard from '../ui/StatCard';
import type { Stat } from '../ui/StatCard';
import estadistica1 from '../../assets/estadisticas1.png';
import estadistica2 from '../../assets/estadisticas2.png';
import estadistica3 from '../../assets/estadisticas3.jpeg';
import estadistica4 from '../../assets/estadisticas4.jpeg';

interface StatisticsProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  {
    id: 1,
    number: '500+',
    label: 'Proyectos Completados',
    description: 'Hemos trabajado en más de 500 proyectos exitosos',
    iconUrl: estadistica1
  },
  {
    id: 2,
    number: '200+',
    label: 'Clientes Satisfechos',
    description: 'Más de 200 empresas confían en nosotros',
    iconUrl: estadistica2
  },
  {
    id: 3,
    number: '15+',
    label: 'Años de Experiencia',
    description: 'Más de una década en el mercado',
    iconUrl: estadistica3
  },
  {
    id: 4,
    number: '98%',
    label: 'Tasa de Satisfacción',
    description: 'Nuestros clientes nos recomiendan',
    iconUrl: estadistica4
  }
];

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  const finalStats = stats && stats.length > 0 ? stats : defaultStats;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(finalStats.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= finalStats.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.floor(finalStats.length / itemsPerPage) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const visibleStats = finalStats.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-white dark:bg-dark-white py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 my-12 md:my-16 rounded-2xl shadow-2xl w-full max-w-7xl mx-auto">
      <div className="w-full">
      
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 md:mb-12">
          Estadísticas
        </h2>

        {/* Carrusel */}
        <div className="relative px-8 sm:px-12 md:px-16">
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 transition-colors duration-300 shadow-lg"
            aria-label="Estadística anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="space-y-6 md:space-y-8 flex flex-col items-center w-full">
            {visibleStats.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                variant={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 z-10 bg-light-blue hover:bg-blue hover:text-white text-black rounded-full p-2 transition-colors duration-300 shadow-lg "
            aria-label="Estadística siguiente"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Número de páginas */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-black w-8'
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
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