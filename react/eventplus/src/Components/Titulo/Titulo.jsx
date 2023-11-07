import React from 'react';
import "./Titulo.css"

const Titulo = ( {titleText, color="", classeAdicional=""} ) => {
    return (
        <div>
            <h1 className={ `title ${classeAdicional}`} style={ { color: color } } >
                {titleText}

                <hr className='title__underscore' style={color !== "" ? {borderColor: color} : {} }/>
            </h1>
        </div>
    );
};

export default Titulo;