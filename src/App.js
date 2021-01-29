import React from 'react';
import './App.css';


const drumpadKeys = [
  {key: 'Q', source: "src"},
  {key: 'W', source: "src"},
  {key: 'E', source: "src"},
  {key: 'A', source: "src"},
  {key: 'S', source: "src"},
  {key: 'D', source: "src"},
  {key: 'Z', source: "src"},
  {key: 'X', source: "src"},
  {key: 'C', source: "src"},
]

const DrumPad = () => {
  const drumpadKeyContainers = drumpadKeys.map((item) =>
    <div className="drum-pad" id={item.key}>
      <audio className="clip" src={item.source} />
      {item.key}, {item.source}
    </div>
  )
  return (
    <div>{drumpadKeyContainers}</div>
  )
}


function App() {
  return (
    <div id="drum-machine">
      <div id="display">
        Hello World
        <DrumPad />
      </div>
    </div>
  ) 
}

export default App;
