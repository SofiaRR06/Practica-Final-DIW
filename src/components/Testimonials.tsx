import React from 'react';
import TestimonialCard from './TestimonialsCard'; 
import type { Testimonial } from './TestimonialsCard';
import testimonio2 from '../assets/testimonio2.png';
import testimonio1 from '../assets/testimonio1.png';

interface TestimonialsProps {
  testimonials?: Testimonial[];
  verifiedBy?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María García',
    role: 'CEO',
    company: 'TechStart',
    text: 'Excelente trabajo, superaron nuestras expectativas. El equipo fue muy profesional y entregó todo a tiempo.',
    rating: 5,
    avatarUrl: testimonio2
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Director de Marketing',
    company: 'Fashion Brand',
    text: 'El diseño de nuestra nueva identidad visual fue impresionante. Recomendado al 100%.',
    rating: 5,
    avatarUrl: testimonio1
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ 
  testimonials = defaultTestimonials,
  verifiedBy = 'Google Reviews'
}) => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 mt-20 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          Testimonios
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Testimonials */}
          <div className="lg:col-span-2 space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Column - Verification Badge */}
          <div className="flex justify-center items-center lg:justify-end">
            <div className="bg-light-blue rounded-2xl p-8 text-center max-w-xs w-full">
              <p className="text-lg font-semibold text-black mb-4">
                Verificado
                <br />
                por
              </p>
              <div className="h-1 bg-black rounded w-3/4 mx-auto"></div>
              {verifiedBy && (
                <p className="text-sm text-gray-600 mt-4">{verifiedBy}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;