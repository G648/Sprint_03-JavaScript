import React from "react";

import "./Toggle.css";

const Toggle = ({manipulationFunction = null, toggleActive = false}) => { 
    const fakeId =Math.random();
  return (
    <>
      <input type="checkbox" id={`switch-check${fakeId}`} className="toggle__switch-check" />

      <label className={`toggle ${toggleActive ? "toggle--active" : ""}`} htmlFor="switch-check" onClick={manipulationFunction}>
        <div className={`toggle__switch ${toggleActive ? "toggle__switch--active" : ""}`}></div>
      </label>
    </>
  );
};

export default Toggle;