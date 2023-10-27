import React from "react";
import "./CardEvento.css"

const CardEvento = ({ tituloEvento, subEvento, btnEvento}) => {

    return (
        <div className="allCards">
            <div className="card">
                <h1 className="card__text">{tituloEvento}</h1>
                <p className="card__info">{subEvento}</p>
                <button className="card__btn">
                    {btnEvento}
                </button>
            </div>
        </div>
    );

}

export default CardEvento;