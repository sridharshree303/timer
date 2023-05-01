import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [pause, setPause] = useState(false);

  const tick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(tick, 1000);
      return () => {
        clearInterval(interval);
        setMin(Math.floor(count / 60));
        setHour(Math.floor(count / 3600));
      }
    }
    // eslint-disable-next-line
  }, [count, min, hour, pause]);

  const reset = () => {
    setCount(0);
    setMin(0);
    setHour(0);
    setPause(false);
  }

  const stop = () => {
    setPause(!pause);
  }

  return (
    <>
      <div className='App container-fluid App-header'>
        <div className='row'>
          <h1 className='pb-4'>{String(hour).padStart(2, 0)} : {String(min).padStart(2, 0)} : {String(count % 60).padStart(2, 0)}</h1>
          <div>
            <button onClick={reset}>Reset</button>
            <button onClick={stop}>
              {
                pause ? <span>Resume</span> : <span>Pause</span>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
