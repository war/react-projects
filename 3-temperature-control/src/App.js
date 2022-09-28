import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TempControl } from './components/TempControl';
import { useEffect } from 'react';
import { bgChange } from './utils/util';

function App() {

  const [temp, setTemp] = React.useState(0);
  const [cssClass, setCss] = React.useState("none");

  useEffect(() => {
    setCss(bgChange(temp));
  },[temp]) // <-- here put the parameter to listen

  return (
    <div className={`App ${cssClass}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TempControl temp={temp} setTemp={setTemp}></TempControl>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
