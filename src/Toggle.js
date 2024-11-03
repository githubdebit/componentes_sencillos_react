import { useState } from 'react';

function Toggle() {
  
  // Variable que cambiará de estado en el estilo
  const [mensaje, setMensaje] = useState("HOLA MUNDO");

  // Intercambia el estado de visible
  const conmutaVisibilidad = () => {
    if (mensaje==="HOLA MUNDO") {
        setMensaje("");
    }
    else {
        setMensaje("HOLA MUNDO");
    };
  };


  return (
    <div className="App">
        <h1>{mensaje}</h1>
        <div>
            <button class="button" onClick={conmutaVisibilidad}>Conmuta visibilidad</button>
            
        </div>
    </div>
  );
}

export default Toggle;
