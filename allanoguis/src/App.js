import logo from "./logo.svg";
import "./styles/App.css";
import ButtonCount from "./projects/ButtonCount.tsx";
import AgeHook from "./projects/R18Gatekeeper.tsx";
import PasswordGenerator from "./projects/PasswordGenerator.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <ButtonCount />
        <AgeHook />
        <PasswordGenerator />
      </header>
    </div>
  );
}

export default App;
