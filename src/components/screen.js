import React from "react";
import Timer from "./timer";
import Button from "./button";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Screen(props) {
  return (
    <div className="screen">
      <div className="wrapper">
        <CircularProgressbar
          className="screen_circle"
          percentage={props.percentage}
          text={`${props.minutes}:${props.seconds}`}
          strokeWidth={5}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: "#ff4500",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s"
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#fff"
            },
            // Customize the text
            text: {
              // Text color
              fill: "#fff",
              // Text size
              fontSize: "16px"
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7"
            }
          }}
        />
      </div>

      <Button start={props.start} reset={props.reset} isOn={props.isOn} />
      <div className="screen_score">Score:{props.score}</div>
    </div>
  );
}
