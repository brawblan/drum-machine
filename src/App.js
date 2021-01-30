import React from 'react';
import './App.css';


const drumpadKeys = [
  {key: 'Q', source: "src", keycode: 80},
  {key: 'W', source: "src", keycode: 80},
  {key: 'E', source: "src", keycode: 80},
  {key: 'A', source: "src", keycode: 80},
  {key: 'S', source: "src", keycode: 80},
  {key: 'D', source: "src", keycode: 80},
  {key: 'Z', source: "src", keycode: 80},
  {key: 'X', source: "src", keycode: 80},
  {key: 'C', source: "src", keycode: 80},
]

const DrumPad = () => {
  const drumpadKeyContainers = drumpadKeys.map((item) =>
    <div className="drum-pad" key={item.key}>
      <audio className="clip" id={item.key} src={item.source} />
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
