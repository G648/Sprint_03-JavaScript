import React from "react";

import "./Toggle.css";

const Toggle = ({manipulationFunction = null}) => {
  return (
    <>
      <input type="checkbox" id="switch-check" className="toggle__switch-check" />

      <label className="toggle" htmlFor="switch-check" onClick={manipulationFunction}>
        <div className="toggle___switch"></div>
      </label>
    </>
  );
};

export default Toggle;
