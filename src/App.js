import logo from "./logo.svg";
import "./App.css";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <a href="https://github.com/matteo-luraghi">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <div className="App-body">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
