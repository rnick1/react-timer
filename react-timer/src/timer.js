import React from 'react';
import './style.css';

const Timer = () => {
    return (
        <div className="container">
            <div className="time">
                <span className="minute">00</span>
                <span>:</span>
                <span className="second">00</span>
            </div>
            <div className="buttons">
                <button onClick={() => null} className="start">Start</button>
                <button onClick={() => null} className="reset">Reset</button>
            </div>
            </div>
    )
}

export default Timer;