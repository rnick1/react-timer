import React, {useState, useEffect} from 'react';
import './style.css';

const Timer = () => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;
    
        if (isActive) {
          intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);
    
            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
    
            setSecond(computedSecond);
            setMinute(computedMinute);
    
            setCounter(counter => counter + 1);
          }, 1000)
        }
    
        return () => clearInterval(intervalId);
      }, [isActive, counter])

      function stopTimer() {
          setSecond("00");
          setMinute("00");
          setIsActive(false);
          setCounter(0);
      }

    return (
        <div className="container">
            <div className="time">
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
            </div>
            <div className="buttons">
                <button onClick={() => setIsActive(!isActive)} className="start">{isActive ? "Pause" : "Start"}</button>
                <button onClick={stopTimer} className="reset">Reset</button>
            </div>
            </div>
    )
}

export default Timer;

/*
From article by Adesile Emmanuel:
"Lets break down what's going on in the useEffect.

Toggle the start button value(Start or Pause) based on isActive state.
We only run the setInterval function if isActive is true.
secondCounter is calculated by getting the remainder of counter divided by 60 - using the modulo operator (%).
minuteCounter is calculated by dividing the counter by 60 and rounding it down using Math.floor.
We append an extra zero to the second and minute values so that we always have 2 digits.
We update the second and minute states using the computedMinute and computedSecond values.
count is also increased by 1 every second the effect runs.
We return a cleanup function to clear the interval when the effect stops running.
Lastly, we add the isActive and counter state to the dependency array. This ensures that the effect only runs when either of them changes."
https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
*/