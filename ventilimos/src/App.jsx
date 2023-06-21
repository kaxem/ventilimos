import Topbar from "./components/Topbar/Topbar"; 
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { useState } from "react";


function App() {
  const [style,setStyle]=useState(['black','gray','gray','gray','gray'])

  function scorllNav (event){
  console.log(event.target.scrollTop)

  if (event.target.scrollTop<670){
    setStyle(['black','gray','gray','gray','gray'])
  }else if(670<=event.target.scrollTop && event.target.scrollTop<1340 ){
    setStyle(['gray','black','gray','gray','gray'])
  }else if(1340<=event.target.scrollTop && event.target.scrollTop<2010){
    setStyle(['gray','gray','black','gray','gray'])
  }else if(2010<=event.target.scrollTop && event.target.scrollTop<2680){
    setStyle(['gray','gray','gray','black','gray'])
  }else if(2680<=event.target.scrollTop){
    setStyle(['gray','gray','gray','gray','black'])
  }
};
  return (
    <div className="app" >
      <Topbar style={style}/>
      <div className="sections" onScroll={scorllNav}>
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
