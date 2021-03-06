import React, { useState, useEffect } from "react";
import "./style.css";
import song from "./static/bbell.wav";

export default function AltTimer() {
  const [second, setSecond] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [audio] = useState(new Audio(song));

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;

        if (counter === 2) {
          audio.play();
        }

        setSecond(computedSecond);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setSecond("00");
    setIsActive(false);
    setCounter(0);
  }

  return (
    <div className="container">
      <div className="time">
        <span className="minute">00</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}
