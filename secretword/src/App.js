import './App.css';

// React
import {useCallback, useEffect, useState} from "react";

// data
import {wordsList} from "./data/words"


// Components
import StartScreen from './components/StartScreen';

function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
