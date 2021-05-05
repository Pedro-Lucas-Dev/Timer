import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(null);
  const date = new Date();
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
  useEffect(() => {
    setInterval(() => {
      const refreshDate = new Date();
      setTime(refreshDate.getSeconds());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h2>Hoje é dia {date.getDate()}</h2>
      <h2>Mês {mouths[date.getMonth()]}</h2>
      <h2>Do ano {date.getFullYear()}</h2>
      <h2>hora: {date.getHours()}</h2>
      <h2>minuto: {date.getMinutes()}</h2>
      <h2>Segundos: {time}</h2>

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
