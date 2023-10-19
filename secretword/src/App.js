import './App.css';

// React
import {useCallback, useEffect, useState} from "react";

// data
import {wordsList} from "./data/words"


// Components
import StartScreen from './components/StartScreen';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id:3, name: "end"}
]

function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
