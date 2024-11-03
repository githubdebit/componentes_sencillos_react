import { useState } from 'react';

function Contador() {
  
  const [num, setNum] = useState(0);

  
  return (
    <div className="App">
        <h1>{num}</h1>
        <div>
            <button class="button" onClick={() => setNum(num+1)}>Incrementa</button>
            <button class="button" onClick={() => setNum(num-1)}>Decrementa</button>
        </div>
    </div>
  );
}

export default Contador;
