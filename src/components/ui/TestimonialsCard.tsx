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
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg dark:bg-dark-card shadow-lg">
      <div className="shrink-0">
        <div className="w-16 h-16 rounded-full bg-light-blue flex items-center justify-center overflow-hidden">
          {testimonial.avatarUrl ? (
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <p >La imagen no está disponible</p>
          )}
        </div>
      </div>

      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
          {(testimonial.role || testimonial.company) && (
            <p className="text-sm text-grey">
              {testimonial.role}
              {testimonial.role && testimonial.company && ' • '}
              {testimonial.company}
            </p>
          )}
        </div>

        <p className="text-base text-black leading-relaxed">
          "{testimonial.text}"
        </p>

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