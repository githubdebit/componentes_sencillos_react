function Lista() {
  
    const tareas = [
        { id: 1, tarea: "Hacer ejercicio 1" },
        { id: 2, tarea: "Hacer ejercicio 2" },
        { id: 3, tarea: "Hacer ejercicio 3" },
        { id: 4, tarea: "Hacer ejercicio 4" },
        { id: 5, tarea: "Hacer ejercicio 5" },
      ];
    
    const mostrarTareas = tareas.map(item => 
        (
            <li key={item.id} >   <input type="checkbox" className='checkboxGrande'></input>  {item.tarea}</li>
        )); 
    
      return (
        <ul className='listaSinPuntos'>       {mostrarTareas}        </ul>
      );


}

export default Lista;