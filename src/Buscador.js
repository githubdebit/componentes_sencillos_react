import React, { useState } from 'react';

function Buscador() {
  
    // Inicializar busqueda
    const [busqueda, setBusqueda] = useState("");       // el componente se renderiza cada vez que cambia el estado de busqueda

    // Array inicial
    const productosIniciales = [
        { id: 1, producto: "Tortilla de patatas" },
        { id: 2, producto: "Bonito con patatas" },
        { id: 3, producto: "Lechazo al horno" },
        { id: 4, producto: "Pato al horno" },
        { id: 5, producto: "Ensalada" },
        { id: 6, producto: "Ensalada mixta" },
      ];
    
      // Se define entre [] porque va a recibir un array
      // se genera para poder iterar sobre la variable, ya que no podemos hacerlo directamente sobre productosIniciales
    const [productos] = useState(productosIniciales);

    
    // Filtro con el contenido de busqueda sobre la lista de productos
    const productosFiltrados = productos.filter(item => item.producto.toLowerCase().includes(busqueda.toLowerCase()));


    // Actualizar el estado de búsqueda con el valor del input
    const manejarCambio = (e) => {       setBusqueda(e.target.value);      };
    
    // Guardar la lista resultante fuera del return antes de renderizar
    const resultado = productosFiltrados.map(item => (
        <li key={item.id} className='Izda'>{item.producto}</li>
      ));                           
                                 
      return (
        
        <div >
            <ul >{resultado}</ul>
           
            <input 
                        type="text" 
                        value={busqueda} 
                        placeholder="Introduzca el filtro..." 
                        onChange={manejarCambio}>
            </input>
        </div>
      );


}

export default Buscador;