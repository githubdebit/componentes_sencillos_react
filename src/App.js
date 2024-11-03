import './App.css';

import Contador from './Contador.js';
import Formulario from './Formulario.js';
import Toggle from './Toggle.js';
import Lista from './Lista.js';


import { useState } from 'react';
import Buscador from './Buscador.js';


function App() {
  

  const [ejercicio, setEjercicio] = useState(null);

  const ponerEjercicio = () => {
      switch (ejercicio) {
          case 'Ejercicio1':
              return (
                <>
                  <h2>Contador</h2>
                  <Contador></Contador>
                </>
              );
          case 'Ejercicio2':
            return (
              <>
                <h2>Formulario simple</h2>
                <Formulario></Formulario>
              </>
            );
          case 'Ejercicio3':
            return (
              <>
                <h2>Toggle de visibilidad</h2>
                <Toggle></Toggle>
              </>
            );
          case 'Ejercicio4':
            return (
              <>
                <h2>Lista de tareas</h2>
                <Lista></Lista>
              </>
            );
          case 'Ejercicio5':
                <h2>Buscador de productos</h2>
                  return <Buscador></Buscador>
          default:
              return <p>Selecciona un ejercicio para ver su contenido</p>;
      }
  };

  return (
    <div className="App">
      <header className='App-header'>
        <div>
            <button onClick={() => setEjercicio('Ejercicio1')}><h1>Ejercicio 1</h1></button>
            <button onClick={() => setEjercicio('Ejercicio2')}><h1>Ejercicio 2</h1></button>
            <button onClick={() => setEjercicio('Ejercicio3')}><h1>Ejercicio 3</h1></button>
            <button onClick={() => setEjercicio('Ejercicio4')}><h1>Ejercicio 4</h1></button>
            <button onClick={() => setEjercicio('Ejercicio5')}><h1>Ejercicio 5</h1></button>
        </div>
      </header>
      <cuerpo className='App-cuerpo'>
        <div>
            {ponerEjercicio()}
        </div>
      </cuerpo>
    </div>
);

}

export default App;

