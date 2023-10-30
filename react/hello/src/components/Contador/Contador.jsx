import React, { useState } from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0) //-> stado inicial de um componente

    function handleIncremento() {
        setContador(contador + 1);
    }

    function handleDecremento() {

        (contador === 0) ? alert('não é possível decrementar') :  setContador (contador - 1)

    }

    return (
        <div>
            <h1>Contador</h1>

            <span>{contador}</span>
            <button onClick={ () => {handleIncremento()}}>Incrementar</button>
            <button onClick={ () => {handleDecremento()}}>Decrementar</button>
        </div>
    );
};

export default Contador;