import React from 'react';
import PhotoHeader from '../../assets/header.png';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="py-8 md:py-12 px-6 lg:px-12 mt-24 md:mt-32 lg:mt-36 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="w-full order-1 lg:order-2">
            <img src={PhotoHeader} alt="Header" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>

          <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue dark:text-white leading-tight">
              En PRISMA CREATIVE transformamos tu marca en una experiencia visual
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Button className="text-xl md:text-2xl px-6 py-3 w-auto max-w-sm dark:text-dark-text-primary">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;