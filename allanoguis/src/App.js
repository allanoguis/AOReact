import logo from "./logo.svg";
import "./CSS/App.css";
import { useState } from "react";
import Game from "./component/tictactoe";

function App() {
  let [count, handleCount] = useState(0);
  let [count2, setCount2] = useState(0);

  function Button1() {
    function click() {
      handleCount(count + 1);
    }
    return (
      <button onClick={click} className="button">
        Click ME
      </button>
    );
  }

  function Button2() {
    function click2() {
      setCount2(count2 + 1);
    }

    return (
      <button onClick={click2} className="button2">
        Clicked {count2} times
      </button>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <Button1 />
        <h2>CLICKED TIMES {count}</h2>
        <Button2 />
        <Game />
      </header>
    </div>
  );
}

export default App;
