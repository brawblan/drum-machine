import React, { useState, useEffect } from 'react';
import './App.css';
import useSound from 'use-sound';

const notClicked = {
  border: '3px inset rgb(120, 120, 120)',
  width: '100px',
  height: '100px',
  backgroundColor: '#000',
  color: '#fff',
}
const clicked = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: '3px outset rgb(120, 120, 120)',
  width: '100px',
  height: '100px',
  position: 'relative',
  top: '2px',
  right: '2px'
};

const DrumPad = ({ pad, onClick }) => {
  const { id, letter, src, keycode } = pad;
  const [isClicked, setIsClicked] = useState(notClicked);
  const [play] = useSound(src);

  const onKeyPressed = (e) => {
    if (e.keyCode === keycode) {
      play();
      setIsClicked(clicked);
      handleKey();
    }
  }

  const onKeyUped = () => {
    setIsClicked(notClicked);
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);
    window.addEventListener('keyup', onKeyUped);
  }, [])

  const handleKey = () => onClick(id);

  return (
    <div 
      className="drum-pad"
      style={isClicked}
      id={letter}
      keycode={letter}
      onClick={play}
    >
      <audio 
        className="clip"
        src={src}
        id={letter}
      ></audio>
      <h1>{letter}</h1>
    </div>
  )
} 

function App() {
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

  const [displayId, setDisplayId] = useState("");

  const changeDisplay = (id) => {
    setDisplayId(id)
  }

  return (
    <div id="drum-machine">
      <h1>{displayId}</h1>
      <div id="display">
        <div className="drum-pads">
          {drumpadData.map((d, i) => (
            <DrumPad
              key={d.id}
              pad={d}
              index={i}
              onClick={changeDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  ) 
}

export default App;
