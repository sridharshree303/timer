import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(true);

  const tick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    if (!start && !pause) {
      const interval = setInterval(tick, 1000);
      return () => {
        clearInterval(interval);
        setMin(Math.floor(count / 60));
        setHour(Math.floor(count / 3600));
      }
    }
    // eslint-disable-next-line
  }, [count, min, hour, pause, start]);

  const reset = () => {
    setCount(0);
    setMin(0);
    setHour(0);
    setPause(false);
    setStart(true);
  }

  const stop = () => {
    setPause(!pause);
  }

  const startTimer = () => {
    setStart(false);
  }

  return (
    <>
      <div className='App container-fluid App-header'>
        <div className='row'>
          <h1 className='pb-4'>{String(hour).padStart(2, 0)} : {String(min).padStart(2, 0)} : {String(count % 60).padStart(2, 0)}</h1>
          <div>
            {
              start
                ?
                <button onClick={startTimer}>Start</button>
                :
                <button onClick={reset}>Reset</button>
            }
            <button onClick={stop}>
              {
                pause && !start ? <span>Resume</span> : <span>Pause</span>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
