import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-light">
          Hecho con React por{" "}
          <span className="text-white font-normal">Emiliano Olivera Herrera</span>
        </p>
        <p className="text-sm text-gray-500 mt-2 font-light">
          © 2026 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
