import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import useSound from 'use-sound';

const drumpadData = [
  {id: 'cymbal', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', keycode: 81},
  {id: 'snare', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 87},
  {id: 'hihat', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 69},
  {id: 'bass', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 65},
  {id: 'tom1', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 83},
  {id: 'tom2', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 68},
  {id: 'tom3', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 90},
  {id: 'ride', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 88},
  {id: 'crash', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 67},
]

// const notClicked = {
//   border: '3px inset rgb(120, 120, 120)',
//   width: '100px',
//   height: '100px',
//   backgroundColor: '#000',
//   color: '#fff',
// }

// const clicked = {
//   backgroundColor: '#ffffff',
//   color: '#000000',
//   border: '3px outset rgb(120, 120, 120)',
//   width: '100px',
//   height: '100px',
//   position: 'relative',
//   top: '2px',
//   right: '2px'
// };

const DrumPad = ({ id, letter, src, handleDisplay }) => {
  // const [isClicked, setIsClicked] = useState(true);
  const [play] = useSound(src);

  function useKey(key, callback) {
    const callbackRef = useRef(callback);

    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {
      function handle(e) {
        if (e.code === key) {
          callbackRef.current(e);
          play();
        }
      }
      document.addEventListener('keypress', handle);
      return () => document.removeEventListener('keypress', handle)
    });
  }
  
  return (
    <div 
      className='drum-pad'
      id={id}
      onClick={play}
      onKeyDown={useKey}
    >
      <h1>{letter}</h1>
      <audio 
        className='clip'
        src={src}
        id={letter}
      ></audio>
    </div>
  )
} 

function App() {
  const [display, setDisplay] = useState('');

  const handleDisplay = (id) => {
    setDisplay(id)
  }

  return (
    <div id="drum-machine">
      <h1>{display}</h1>
      <div id="display">
        <div className="drum-pads">
          {drumpadData.map((d) => (
            <DrumPad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={handleDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  ) 
}

export default App;
