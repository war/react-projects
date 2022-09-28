import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  const remCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter: {count}
        </p>
        <p>
        <button onClick={addCount}>+</button>
        <button onClick={remCount}>-</button>
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
