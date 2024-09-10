import logo from "./logo.svg";
import "./styles/App.css";
import ButtonCount from "./component/ButtonCount.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <ButtonCount />
      </header>
    </div>
  );
}

export default App;
