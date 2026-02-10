import React from 'react';
import PhotoHeader from '../assets/header.png'
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="py-12 px-6 mt-33 lg:mx-20 md:mx-0">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-dark-blue leading-snug">
              En PRISMA CREATIVE transformamos tu marca en una experiencia visual
            </h1>
            <Button className="text-lg sm:text-xl px-6 py-3">
              Contáctanos
            </Button>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="rounded-lg w-80 md:w-110">
              <img src={PhotoHeader} alt="Header" className="w-full h-auto object-contain"/>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
