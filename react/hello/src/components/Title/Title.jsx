import React from "react";
import './Title.css'

const title = (props) => {

    return(
        <h1 className="title">Hello {props.text}</h1>
    );

}

export default title;