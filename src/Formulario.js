import React, { useState, useEffect, useRef } from 'react';

function Formulario() {
  
  const nombre = useRef(null);

/*
        ¡¡MUY IMPORTANTE!!

                useEffect(() => {
                        //Runs on every render
                });

                useEffect(() => {
                  //Runs only on the first render
                }, []);
                useEffect(() => {
                  //Runs on the first render
                  //And any time any dependency value changes
                }, [prop, state]);
*/


  useEffect(() => {
    nombre.current.focus(); //focus(): permite que el usuario pueda escribir en él inmediatamente, sin necesidad de hacer clic. [html]
  },[]);
  
  const [muestraMensaje, setMuestraMensaje] = useState(null);
  
  const manejadorSubmit = (e) => {
    e.preventDefault();                                                 // Previene que recargue el formulario (cosa que hace por defecto)
    setMuestraMensaje("Bienvenido, " + nombre.current.value);
  };
  
  return (
    <div className="App">
        <div>
          <p>{muestraMensaje}</p>
          <form onSubmit={manejadorSubmit}>
            <input type="text" ref={nombre} placeholder="Introduzca su nombre... "></input>
            <button type="submit" >Enviar</button>
          </form>
        </div>
    </div>
  );
}

export default Formulario;
