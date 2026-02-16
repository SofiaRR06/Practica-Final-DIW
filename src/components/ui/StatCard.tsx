import React from 'react';

export interface Stat {
  id: number;
  number: string;
  label: string;
  description?: string;
  iconUrl?: string;
}

interface StatCardProps {
  stat: Stat;
  variant?: 'left' | 'right'; // Posición del ícono
}

const StatCard: React.FC<StatCardProps> = ({ stat, variant = 'right' }) => {
  return (
    <div className={`dark:bg-dark-card rounded-lg justify-center shadow-lg w-150 h-40 flex items-center gap-6 p-6 ${
      variant === 'left' ? 'flex-row' : 'flex-row-reverse  '
    }`}>
      {/* Icon Circle */}
      <div className="shrink-0">
        <div className="w-25 h-25 md:w-24 md:h-24flex items-center justify-center overflow-hidden">
          {stat.iconUrl ? (
            <img
              src={stat.iconUrl}
              alt={stat.label}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-full h-full text-black p-4"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="50" cy="50" r="48" />
              <line x1="15" y1="15" x2="85" y2="85" />
              <line x1="85" y1="15" x2="15" y2="85" />
            </svg>
          )}
        </div>
      </div>

      {/* Stat Content - CONTENIDO REAL */}
      <div className={`shrink-0 ${
        variant === 'left' ? 'text-left' : 'text-right'
      }`}>
        {/* Number - Grande y Bold */}
        <h3 className="text-4xl md:text-5xl font-bold text-black">
          {stat.number}
        </h3>
        
        {/* Label - Título */}
        <p className="text-xl md:text-2xl font-semibold text-black">
          {stat.label}
        </p>
        
        {/* Description - Texto descriptivo */}
        {stat.description && (
          <p className="text-base text-gray-600">
            {stat.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;