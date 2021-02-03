import React, { useState } from 'react';
import './App.css';

const drumpadKeys = [
  {key: 'Q', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 81},
  {key: 'W', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 87},
  {key: 'E', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 69},
  {key: 'A', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 65},
  {key: 'S', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 83},
  {key: 'D', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 68},
  {key: 'Z', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 90},
  {key: 'X', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 88},
  {key: 'C', source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keycode: 67},
]

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

const DrumPad = () => {
  const [isClicked, setIsClicked] = useState(true);

  const padClicked = (e) => {
    drumpadKeys.forEach(item => {
      if (e.keyCode === item.keycode) {
        item.style = setIsClicked(!isClicked)
      }
    })
  }

  const keyUp = () => {
    setIsClicked(!isClicked)
  }


  const playSound = (key) => {
    const sound = document.getElementById(`${key}`);
    sound.currentTime = 0;
    sound.play();
    padClicked();
    setTimeout(() => padClicked(), 100)
  }
  
  const drumpadKeyContainers = drumpadKeys.map((item, index) =>

    <div 
      className="drum-pad"
      id={item.key}
      style={isClicked ? notClicked : clicked}
      onKeyDown={playSound(item.key)}
      onKeyUp={keyUp}
      key={item.key} 
      keycode={item.keycode}
      tabIndex={index}
    >
      <audio 
        className="clip" 
        // id={item.key} 
        src={item.source} 
      />
      {item.key}
    </div>
  )
  return (
    <div id="drumpadKeyContainer">{drumpadKeyContainers}</div>
  )
}

function App() {
  return (
    <div id="drum-machine">
      <div id="display">
        <DrumPad />
      </div>
    </div>
  ) 
}

export default App;