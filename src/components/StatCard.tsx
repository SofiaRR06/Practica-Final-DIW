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
    <div className={`flex items-center gap-6 p-6 ${
      variant === 'left' ? 'flex-row' : 'flex-row-reverse'
    }`}>
      {/* Icon Circle */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-black bg-white flex items-center justify-center overflow-hidden">
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

      {/* Stat Content */}
      <div className="flex-1 space-y-3">
        {/* Number Line (bold/thick) */}
        <div className="space-y-1">
          <div className="h-2 bg-black rounded w-2/5"></div>
        </div>

        {/* Text Lines */}
        <div className="space-y-2">
          <div className="h-1 bg-black rounded"></div>
          <div className="h-1 bg-black rounded"></div>
          <div className="h-1 bg-black rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;