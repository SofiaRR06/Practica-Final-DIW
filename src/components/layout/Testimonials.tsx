import React from 'react';
import TestimonialCard from '../ui/TestimonialsCard'; 
import type { Testimonial } from '../ui/TestimonialsCard';
import testimonio2 from '../../assets/testimonio2.png';
import testimonio1 from '../../assets/testimonio1.png';
import GoogleReviews from '../../assets/google-reviews.png';

interface TestimonialsProps {
  testimonials?: Testimonial[];
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
}) => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 my-12 md:my-16 rounded-2xl shadow-2xl w-full max-w-7xl mx-auto dark:bg-dark-white">
      <div className="w-full">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 md:mb-12">
          Testimonios
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column - Testimonials */}
          <div className="lg:col-span-2 space-y-6 ">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Column - Verification Badge */}
          <div className="flex justify-center lg:justify-end ">
            <div className="bg-light-blue rounded-2xl p-6 md:p-8 text-center w-full max-w-sm lg:max-w-none dark:bg-dark-card shadow-lg">
              <p className="text-2xl sm:text-3xl font-semibold text-dark-blue mb-4">
                Verificado
                <br />
                por
              </p>
              <div className="w-full max-w-xs mx-auto ">
                <img 
                  src={GoogleReviews} 
                  alt="Google Reviews" 
                  className="w-full h-auto "
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;