import React from 'react';
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

const handlePress = (e) => {
  console.log(e.keycode);
}

const DrumPad = () => {
  const drumpadKeyContainers = drumpadKeys.map((item) =>
    <div 
      className="drum-pad" 
      key={item.key} 
      keycode={item.keycode}
      onKeyDown={(e) => handlePress(e)}
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
        <DrumPad />
      </div>
    </div>
  ) 
}

export default App;
