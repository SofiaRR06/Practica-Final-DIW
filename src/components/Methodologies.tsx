import React from "react";
import  Kanban  from "../assets/metodologia-kanban.png";
import Scrum from "../assets/metodologia-scrum.jpg";

const Methodologies: React.FC = () => {
  return (
    <div className="bg-white mx-auto px-4 py-10 mt-20 rounded-2xl" >
      <h2 className="text-5xl font-bold text-center  text-blue">
        Metodologías que usamos
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Cuadro izquierdo */}
        <div className="w-90 h-90 flex items-center justify-center">
          <img src={Kanban} className="rounded-md"/>
        </div>

        {/* Líneas centrales */}
        <div className="flex-1 space-y-4 text-blue text-justify text-lg">
          En nuestra empresa de publicidad aplicamos metodologías ágiles como Kanban y Scrum para gestionar proyectos
          de manera eficiente. <br />Kanban nos ayuda a visualizar el flujo de trabajo y priorizar tareas, mientras que Scrum
          organiza proyectos complejos en sprints, fomentando la colaboración y la entrega rápida de resultados. <br/>
          Así conseguimos creatividad, agilidad y campañas de calidad para nuestros clientes.
        </div>

        {/* Cuadro derecho */}
        <div className="w-90 h-90 flex items-center justify-center rounded-md">
                    <img src={Scrum} />
        </div>
      </div>
    </div>
  );
};

export default Methodologies;
