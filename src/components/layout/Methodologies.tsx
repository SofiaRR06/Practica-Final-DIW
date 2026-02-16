import React from "react";
import Kanban from "../../assets/metodologia-kanban.png";
import Scrum from "../../assets/metodologia-scrum.jpg";

const Methodologies: React.FC = () => {
  return (
    <div className="bg-white px-6 md:px-8 lg:px-12 py-8 md:py-12 my-12 md:my-16 rounded-2xl shadow-2xl w-full max-w-7xl mx-auto dark:bg-dark-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-blue mb-8 md:mb-12">
        Metodologías que usamos
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
        <div className="w-full lg:w-1/4 flex items-center justify-center">
          <img src={Kanban} alt="Metodología Kanban"className="w-full h-auto max-w-xs lg:max-w-none rounded-md shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4 text-dark-blue text-justify text-lg md:text-xl leading-relaxed px-4 lg:px-0 ">
          <p>
            En nuestra empresa de publicidad aplicamos metodologías ágiles como <strong>Kanban</strong> y <strong>Scrum</strong> para gestionar proyectos de manera eficiente.
          </p>
          <p>
            Kanban nos ayuda a visualizar el flujo de trabajo y priorizar tareas, mientras que Scrum organiza proyectos complejos en sprints, fomentando la colaboración y la entrega rápida de resultados.
          </p>
          <p>
            Así conseguimos <strong>creatividad, agilidad y campañas de calidad</strong> para nuestros clientes.
          </p>
        </div>

        <div className="w-full lg:w-1/4 flex items-center justify-center">
          <img src={Scrum} alt="Metodología Scrum" className="w-full h-auto max-w-xs lg:max-w-none rounded-md shadow-lg"/>
        </div>
      </div>
    </div>
  );
};
export default Methodologies;
