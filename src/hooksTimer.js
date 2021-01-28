import React, { useState, useEffect } from "react";
import "./hooks-timer.css";

const HooksTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    //debugger;
    setIsActive(!isActive);
  }

  function reset() {
    //debugger;
    setSeconds(0);
    setIsActive(false);
  }

  // Similar to componentDidMount and componentDidUpdate:
  //component just mounted/updated
  useEffect(() => {
    //debugger;
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds} s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default HooksTimer;
