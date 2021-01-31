import React, { useState } from 'react';
import './App.css';


const drumpadKeys = [
  {key: 'Q', source: "src", keycode: 81},
  {key: 'W', source: "src", keycode: 87},
  {key: 'E', source: "src", keycode: 69},
  {key: 'A', source: "src", keycode: 65},
  {key: 'S', source: "src", keycode: 83},
  {key: 'D', source: "src", keycode: 68},
  {key: 'Z', source: "src", keycode: 90},
  {key: 'X', source: "src", keycode: 88},
  {key: 'C', source: "src", keycode: 67},
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

  const keyPress = (e) => {
    console.log(e.target)
    console.log(e.keyCode)
    drumpadKeys.forEach(item => {
      if (e.keyCode === item.key) {
        console.log(item.key)
        setIsClicked(false)
      }
    })
  }
  
  const drumpadKeyContainers = drumpadKeys.map((item) =>

    <div 
      className="drum-pad"
      style={isClicked ? notClicked : clicked}
      onKeyDown={keyPress}
      key={item.key} 
      keycode={item.keycode}
      tabIndex={0}
    >
      <audio 
        className="clip" 
        id={item.key} 
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
        <DrumPad onKeyDown={() => console.log('hi')} />
      </div>
    </div>
  ) 
}

export default App;
