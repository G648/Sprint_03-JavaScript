import React from 'react';
import "./CardEvento.css"

const CardEvento = (props) => {
    return (
        <div className="allCards">
            <div className="card">
                <h1 className="card__text">{props.tituloEvento}</h1>
                <p className="card__info">{props.subEvento}</p>
                <button className="card__btn">
                    Conectar
                </button>
            </div>
        </div>
    );
};

export default CardEvento;