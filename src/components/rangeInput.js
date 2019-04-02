import React from "react";

export default function RangeInput(props) {
  return (
    <div className="slider_container">
      <p>{props.title}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.time}
        step="1"
        name={props.name}
        className="slider"
        onChange={props.handleInput}
      />
      <p>{props.time} minutes</p>
    </div>
  );
}
