import logo from "./logo.svg";
import "./styles/App.css";
import ButtonCount from "./modules/ButtonCount.tsx";
import AgeHook from "./modules/R18Gatekeeper.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <ButtonCount />
        <AgeHook />
      </header>
    </div>
  );
}

export default App;
