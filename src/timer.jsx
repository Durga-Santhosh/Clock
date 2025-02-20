import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert('Please set a time');
    }
    setTimeLeft(hours * 3600 + minutes * 60 + seconds);
    setIsRunning(true);
    
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    if (secs === 0 && mins === 0 && hrs === 1) {
        alert('Time is up');
    }
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className="Timer">
        <div className='maintimer'>
          <div className={`setTime ${menuVisible ? 'vis' : ''}`}>
            <input type="number" id="hours" placeholder='Hours' value={hours} onChange={(e) => setHours(Number(e.target.value))} />:
            <input type="number" id="minutes" placeholder='Min' value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />:
            <input type="number" id="seconds" placeholder='Sec' value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />
          </div>
          <h1 className="set" onClick={() => setMenuVisible(!menuVisible)}>{formatTime(timeLeft)}</h1>
          <div className='buttons'>
            <button className="start" onClick={startTimer}>Start</button>
            <button className="stop" onClick={pauseTimer}>Pause</button>
            <button className="reset" onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;