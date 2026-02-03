import React from 'react';
import PhotoHeader from '../assets/header.png'
import Button  from './Button';

const Header: React.FC = () => {
  return (
    <header className=" py-12 px-6 md:px-12 lg:px-24 mt-30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight">
              En PRISMA CREATIVE transformamos tu marca en una experiencia visual
            </h1>

        <Button className='text-2xl'>Contáctanos</Button>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-light-blue rounded-lg flex items-center justify-center w-110">
              <img src={PhotoHeader} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;