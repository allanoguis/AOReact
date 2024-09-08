import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  function handleClick() {
    alert("Titi! 8===D");
  }
  return <button onClick={handleClick}> Click ME! </button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <MyButton />
        <h2>testsetsetsetsttest</h2>
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
