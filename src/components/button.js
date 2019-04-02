import React from "react";

export default function Button(props) {
  let button;
  if (props.isOn) {
    button = (
      <button className="screen_btn on" onClick={props.reset}>
        Reset
      </button>
    );
  } else {
    button = (
      <button className="screen_btn" onClick={props.start}>
        Start
      </button>
    );
  }

  return <div>{button}</div>;
}
