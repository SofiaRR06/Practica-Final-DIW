import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  text: string;
  avatarUrl?: string;
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
      {/* Avatar Circle */}
      <div className="shrink-0">
        <div className="w-16 h-16 rounded-full bg-light-blue flex items-center justify-center overflow-hidden">
          {testimonial.avatarUrl ? (
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-full h-full text-gray-400 p-3"
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

      {/* Testimonial Content */}
      <div className="flex-1 space-y-3">
        {/* Name and Role */}
        <div>
          <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
          {(testimonial.role || testimonial.company) && (
            <p className="text-sm text-gray-600">
              {testimonial.role}
              {testimonial.role && testimonial.company && ' • '}
              {testimonial.company}
            </p>
          )}
        </div>

        {/* Testimonial Text */}
        <p className="text-base text-black leading-relaxed">
          "{testimonial.text}"
        </p>

        {/* Rating (if provided) */}
        {testimonial.rating && (
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-lg ${
                  index < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;