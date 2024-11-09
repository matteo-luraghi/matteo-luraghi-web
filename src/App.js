import "./App.css";
import ProjectList from "./components/ProjectList";
import GlitchImage from "./components/GlitchImage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <a href="https://github.com/matteo-luraghi" className="noSelect">
          <GlitchImage />
        </a>
      </div>
      <div className="App-body">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
