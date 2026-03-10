import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        {/* Título con línea decorativa */}
        <div className="relative mb-8">
          <h1 className="text-4xl md:text-7xl font-light tracking-tight">
            Aprede React
          </h1>
          <div className="absolute -bottom-4 left-0 w-24 h-0.5 bg-gray-800"></div>
        </div>

        {/* Subtítulo */}
        <p className="text-gray-400 text-2xl font-light max-w-2xl leading-relaxed">
          Explorando el mundo de los componentes y estilizando con Tailwind CSS de la mano de "EsteNoEsMonti"
        </p>

        {/* Mini navegación de conceptos */}
        <nav className="flex gap-8 mt-12 text-xl">
          <a href="#teoria" className="text-gray-400 hover:text-white transition-colors">Introducción</a>
          <a href="#listas" className="text-gray-400 hover:text-white transition-colors">Listas</a>
          <a href="#eventos" className="text-gray-400 hover:text-white transition-colors">Eventos</a>
          <a href="#motion" className="text-gray-400 hover:text-white transition-colors">Motion</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
