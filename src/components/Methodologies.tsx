import React from "react";
import  Kanban  from "../assets/metodologia-kanban.jpg";
import Scrum from "../assets/metodologia-scrum.jpg";

const Methodologies: React.FC = () => {
  return (
    <div className="bg-white mx-auto px-4 py-10 mt-20 rounded-2xl" >
      <h2 className="text-4xl font-bold text-center  text-blue">
        Metodologías que usamos
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Cuadro izquierdo */}
        <div className="w-100 h-100 flex items-center justify-center">
          <img src={Kanban} className="rounded-md"/>
        </div>

        {/* Líneas centrales */}
        <div className="flex-1 space-y-4">
          <div className="h-2 bg-black rounded-full"></div>
          <div className="h-2 bg-black rounded-full"></div>
          <div className="h-2 bg-black rounded-full"></div>
          <div className="h-2 bg-black rounded-full"></div>
          <div className="h-2 bg-black rounded-full"></div>
          <div className="h-2 bg-black rounded-full"></div>
        </div>

        {/* Cuadro derecho */}
        <div className="w-40 h-40 bg-gray-300 flex items-center justify-center rounded-md">
                    <img src={Scrum} />
        </div>
      </div>
    </div>
  );
};

export default Methodologies;
