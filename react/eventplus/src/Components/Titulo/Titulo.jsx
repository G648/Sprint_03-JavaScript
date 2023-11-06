import React from 'react';
import "./Titulo.css"
const Titulo = (props) => {
    return (
        <div>
            <h1 className='title'>{props.nome}</h1>
        </div>
    );
};

export default Titulo;