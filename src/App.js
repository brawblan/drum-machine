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

const DrumPad = ({ pad, drums, onClick }) => {
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
    document.addEventListener('keydown', onKeyPressed);
    document.addEventListener('keyup', onKeyUped);
    return () => {
      document.removeEventListener('keydown', onKeyPressed);
      document.removeEventListener('keyup', onKeyUped);
    }
  })

  const handleClick = () => {
    play();
    setIsClicked(clicked);
    onClick(id)
    setTimeout(() => {
      setIsClicked(notClicked)
    }, 100);
  }

  const handleKey = () => onClick(id);

  return (
    <div 
      className="drum-pad"
      style={isClicked}
      id={letter}
      keycode={letter}
      onClick={handleClick}
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
    {id: 'Heater-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 81},
    {id: 'Heater-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', keycode: 87},
    {id: 'Heater-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', keycode: 69},
    {id: 'Heater-4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', keycode: 65},
    {id: 'Clap', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keycode: 83},
    {id: 'OpenHiHat', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', keycode: 68},
    {id: 'Kick+ClosedHiHat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', keycode: 90},
    {id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', keycode: 88},
    {id: 'ClosedHiHat', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', keycode: 67},
  ]

  const [displayId, setDisplayId] = useState(" ");

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
              drums={d}
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
