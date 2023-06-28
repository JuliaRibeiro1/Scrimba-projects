
import './App'
import React from "react"

function App() {
  const [isStart,IsStartFunction] = React.useState(true)
  return (
    <div className="App">
      {isStart ? 
        <div>
          <h1>Quizzical</h1>
          <button>Start quiz</button>
        </div>
        : 
        <div>kkkkkk</div>
        }
    </div>
  );
}

export default App;
