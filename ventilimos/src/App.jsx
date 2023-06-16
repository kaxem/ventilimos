import Topbar from "./components/Topbar/Topbar"; 
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Home/>
        <About/>
        <Portfolio/>
        <Services/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
