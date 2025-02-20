import './App.css'
import "./styles/font.css"
import Clock from './Digitalclock'
import Stopwatch from './stopwatch'
import Timer from './timer'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('Clock');
  const [menuVisible, setMenuVisible] = useState(false);
  function clockClick() {
    setView('Clock');
    setMenuVisible(!menuVisible) ;
  }
  function stopWatchClick() {
    setView('StopWatch');
    setMenuVisible(!menuVisible) ;
  }
  function timerClick() {
    setView('Timer');
    setMenuVisible(!menuVisible) ;
  }

  return (
    <>
      <p className='menuicon' onClick={() => setMenuVisible(!menuVisible)}> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40px" color='azure'>
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
        </svg>
      </p>
      <div className={`menuitems ${menuVisible ? 'visible' : ''}`}>
        <p onClick={() => setMenuVisible(!menuVisible)}>X</p>
        <p className={`onn ${menuVisible ? 'visible' : ''}`}  onClick={clockClick}>Clock</p>
        <p className={`onn ${menuVisible ? 'visible' : ''}`}  onClick={stopWatchClick}>Stop Watch</p>
        <p className={`onn ${menuVisible ? 'visible' : ''}`}  onClick={timerClick}>Timer</p>
      </div>
      <div className="App">
        <header><h1 className='heading'>{view}</h1></header>
        <main>
          <aside>
            <div className="mainnames">
              <p className='clock' onClick={() => setView('Clock')}>Clock</p>
              <p className='stopwatch' onClick={() => setView('StopWatch')}>Stop Watch</p>
              <p className='timer' onClick={() => setView('Timer')}>Timer</p>
            </div>
            <p className='name'> &copy; Created by Santhosh</p>
          </aside>
          {view === 'Clock' && <Clock />}
          {view === 'StopWatch' && <Stopwatch />}
          {view === 'Timer' && <Timer />}
        </main>
      </div>
    </>
  )
}

export default App