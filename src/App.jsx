import "./App.css";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
