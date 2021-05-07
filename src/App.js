import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const date = new Date();
  const [timeBounded, setTimebounded] = useState(300);
  const [running, setRunning] = useState(false);

  const words = [
    "True ",
    "False ",
    "Magic ",
    "No ",
    "Yes ",
    "Game",
    "AAA",
    "BBB",
    "A",
  ];
  const randomWords = words[Math.floor(Math.random() * words.length)];

  const mouths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const startTimeOut = running
    ? setTimeout(() => {
        updateTime();
      }, 1000)
    : null;

  const updateTime = () => {
    let decrement = timeBounded - 1;
    setTimebounded(decrement);
  };

  return (
    <div className="App">
      <h1>{randomWords}</h1>
      <h1>
        {Math.floor(timeBounded / 60)}:{timeBounded % 60}{" "}
      </h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <h2>Hoje é dia {date.getDate()}</h2>
      <h2>Mês {mouths[date.getMonth()]}</h2>
      <h2>Do ano {date.getFullYear()}</h2>
      <h2>hora: {date.getHours()}</h2>
      <h2>minuto: {date.getMinutes()}</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
