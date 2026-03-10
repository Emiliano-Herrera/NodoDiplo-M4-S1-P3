import React, { useState } from 'react';

const BotonesEjemplo = () => {
  
  const [contador, setContador] = useState(0);
  /* 
    creamos una variable que va a empezar en 0 "contador"
    y setContador seria la funcion que hace q cambie
  */
  const [mensajeVisible, setMensajeVisible] = useState(false);
  /* 
    useState crea un "mensajeVisible" que empieza como falso, basicamente en "oculto"
  */

  return (
    <div className="bg-black p-6 rounded-lg border border-gray-800">
      <h3 className="text-2xl font-light mb-6 text-white">
        Eventos en React
      </h3>

      <div className="space-y-8">
        
        {/* Ejemplo 1: Muestra una alerta cuando se produce la acción del click */}
        <div>
          <h4 className="text-white font-light mb-3">1. Click básico</h4>
          {/* El "onClick" es el evento que se dispara al hacer click y recien se ejeculta la alerta... */}
          <button
            onClick={() => alert('¡Hiciste click!, aguante Boca papá')}
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded transition-colors"
          >
            Mostrar alerta
          </button>
        </div>

        {/* Ejemplo 2: Muestra un contador cuando se le hace click */}
        {/* 
            el contador muestra el valor del estado actual
            el setContador(contador + 1) aumenta el contador en 1 y el setContador(0) lo reinicia
        */}
        <div>
          <h4 className="text-white font-light mb-3">2. Contador: {contador} de clicks en el boton con "onClick"</h4>
          <div className="flex gap-3">
            <button
              onClick={() => setContador(contador + 1)}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded transition-colors"
            >
              + Aumentar
            </button>
            <button
              onClick={() => setContador(0)}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded transition-colors"
            >
              Reiniciar
            </button>
          </div>
        </div>

        {/* Ejemplo 3: Mostrar/Ocultar mensaje */}
        {/* !mensajeVisible invierte el valor (si es true pasa a false y viceversa) */}
        <div>
          <h4 className="text-white font-light mb-3">3. Mostrar/Ocultar un mensaje</h4>
          <button
            onClick={() => setMensajeVisible(!mensajeVisible)}
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded transition-colors"
          >
            {mensajeVisible ? 'Ocultar mensaje' : 'Mostrar mensaje'}
          </button>
          
          {mensajeVisible && (
            <div className="mt-3 p-4 bg-purple-900/30 border border-purple-800 rounded text-purple-200">
              Este mensaje aparece y desaparece al hacer click, capo
            </div>
          )}
        </div>

        {/* Ejemplo 4: Botones con nombres diferentes que saltan alertas al hacerle click y simula un saludo*/}
        <div>
          <h4 className="text-white font-light mb-3">4. Saludar a diferentes personas con el evento "onClick"</h4>
          <div className="flex gap-3">
            <button
              onClick={() => alert('¡Hola Don Pepito!')}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded transition-colors"
            >
              Saludar a Don Pepito
            </button>
            <button
              onClick={() => alert('¡Hola Don José!, aguante Lanus, que me importa riber y boca')}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-4 rounded transition-colors"
            >
              Saludar a Don José
            </button>
          </div>
        </div>
      </div>

      {/* Explicación simple pa argumental*/}
      <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-800">
        <p className="text-gray-400 text-sm">
          📌 Los eventos en React se escriben como onClick, onChange, onSubmit. 
          Siempre en camelCase y con una función entre llaves.
        </p>
      </div>
    </div>
  );
};

export default BotonesEjemplo;