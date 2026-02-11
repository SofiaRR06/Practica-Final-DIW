import React from 'react';
import PhotoHeader from '../assets/header.png';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="py-8 px-4 mt-30 max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <div className=" flex justify-center flex-col">       
            <div className="w-full">
              <img 
                src={PhotoHeader} 
                alt="Header" 
                className="rounded-lg"
              />
            </div>

          <div className="space-y-4 text-center mt-5">
            <h1 className="text-3xl font-bold text-dark-blue leading-tight">
              En PRISMA CREATIVE transformamos tu marca en una experiencia visual
            </h1>
            <div className="flex justify-center">
              <Button className="text-2xl px-6 py-3">
                Contáctanos
              </Button>
            </div>
          </div>        
      </div>
    </header>
  );
};

export default Header;