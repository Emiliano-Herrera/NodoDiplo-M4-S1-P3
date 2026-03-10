import React from "react";
// importo los componentes que voy a usar en el main, lista simple, botones
import LogoAnimado from "./LogoAnimado"; // Importamos el logo animado
import ListaSimple from "./ListaMap";
import BotonesEjemplo from "./BotonesEjemplo";

const Main = () => {
  return (
    <main className="grow container mx-auto max-w-4xl px-4 py-16">
      <div className="space-y-12">
        {/* Sección de teoría existente */}
        <div className="border-b border-gray-800 pb-8">
          <h2 className="text-3xl font-light mb-4 tracking-tight" id="teoria">
            Definición de React
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            React es una biblioteca (librería) de JavaScript de código abierto,
            desarrollada por Facebook (ahora Meta), que se utiliza para
            construir interfaces de usuario (UI) interactivas y dinámicas,
            especialmente para aplicaciones web de una sola página (SPA - Single
            Page Applications).
          </p>
        </div>

        {/* Cards de explicación (Componentes y Tailwind) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-light mb-2 text-white">Componentes</h3>
            <p className="text-gray-400 font-light">
              Los componentes son piezas reutilizables e independientes de
              código que definen partes de la interfaz de usuario. Como bloques
              de Lego que juntos forman tu aplicación.
            </p>
          </div>

          <div className="border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-light mb-2 text-white">Tailwind CSS</h3>
            <p className="text-gray-400 font-light">
              Tailwind es un framework de CSS que en lugar de darte componentes
              pre-diseñados, te proporciona clases utilitarias de bajo nivel
              para construir diseños personalizados directamente en tu HTML/JSX.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: Lista con .map() - ARRIBA */}
        <div className="mt-12 border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-light mb-8 tracking-tight" id="listas">
            Ejemplo de Lista con .map()
          </h2>
          <ListaSimple />
        </div>

        {/* SECCIÓN 3: Eventos - ABAJO */}
        <div className="mt-12 border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-light mb-8 tracking-tight" id="eventos">
            Ejemplo de Eventos en React
          </h2>
          <BotonesEjemplo />
        </div>
        
        {/* SECCION 4: Animacion con motion */}
        <div className="mt-12 border-t border-gray-800 pt-12" id="motion">
          <h2
            className="text-3xl font-light mb-8 tracking-tight"
            id="animacion"
          >
            Animación con Motion
          </h2>
          <LogoAnimado />
        </div>
        {/* Explicación simple pa argumental*/}
        <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-800">
          <p className="text-gray-400 text-sm">
            📌 Motion (anteriormente conocido como Framer Motion) 
            es una librería de animaciones para React que te permite agregar 
            movimientos suaves y profesionales a tus componentes con muy poco código.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
