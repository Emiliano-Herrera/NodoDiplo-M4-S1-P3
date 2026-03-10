
function ListaSimple() {
  
  const frutas = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Pera'];
  
  const usuarios = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Carlos', edad: 30 },
    { id: 3, nombre: 'María', edad: 28 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Frutas</h2>
      
      {/* Lista simple de strings "frutas" */}
      <ul className="list-disc pl-5 mb-6">
        {frutas.map((fruta, index) => (
          <li key={index} className="text-gray-700">
            {fruta}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>
      
      {/* Lista de objetos "usuario" */}
      <div className="space-y-2">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="bg-gray-800 p-3 rounded">
            <p className="font-semibold">{usuario.nombre}</p>
            <p className="text-gray-600">Edad: {usuario.edad}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaSimple;