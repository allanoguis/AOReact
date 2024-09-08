import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function MyButton() {
    function handleClick() {
      setCount(count + 1);
    }
    return (
      <button onClick={handleClick} className="button">
        Click ME
      </button>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <MyButton />
        <h3>CLICKED TIMES {count}</h3>
      </header>
    </div>
  );
}

export default App;
