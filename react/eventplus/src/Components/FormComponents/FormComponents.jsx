import React from 'react';
import './FormComponents.css'

export const Input = ({

    type,
    id,
    value,
    required,
    additionalClass,
    name,
    placeholder,
    manipulationFunction

}) => {

    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            required={required ? "required" : ""}
            // podemos passar uma additional class também
            className={`input-component ${additionalClass}`}
            placeholder={placeholder}
            onChange={manipulationFunction}
            autoComplete='off'
        />

    );
};

export const Label = ({ htmlFor, labelText }) => {
    return <label htmlFor={htmlFor} labelText={labelText}></label>
}

export const Button = (props) => {
    return (
        // componente criado recebendo as props ao invés de destructuring
        <button
            id={props.id}
            name={props.name}
            type={props.type}
            className={`button-component ${props.additionalClass}`}
            onClick={props.manipulationFunction}
        >
            {props.textButton}
        </button>
    );
}

export const Select = ({
    required,
    id,
    name,
    options,
    manipulationFunction,
    additionalClass = "",
    defaultValue

}) => {
    return (
        <select
            name={name}
            id={id}
            required={required}
            className={`input-component ${additionalClass}`}
            onChange={manipulationFunction}
            value={defaultValue}
        >
            <option value=""> Selecione: </option>

            {options.map((opt) => {
                return (
                    <option key={opt.idTipoEvento} value={opt.idTipoEvento}>{opt.titulo}</option>
                );
            })}

        </select>
    );
}   