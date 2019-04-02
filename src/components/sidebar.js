import React from "react";
import Rangeinput from "./rangeInput";
const Sidebar = props => {
  return (
    <div className="sidebar">
      <Rangeinput
        title="Work time"
        handleInput={props.handleWorktime}
        min={1}
        max={90}
        name="workTime"
        time={props.workTime}
      />
      <Rangeinput
        title="Break time"
        handleInput={props.handleBreaktime}
        min={1}
        max={25}
        name="breakTime"
        time={props.breakTime}
      />
    </div>
  );
};

export default Sidebar;
