import "./Topbar.scss"

export default function Topbar({style}) {
function test(e){
  e.target.classList.add("change");
}
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#home" className="menu" style={{color:style[0]}} onClick={test}>Home</a>
                <a href="#about" className="menu" style={{color:style[1]}} >About</a>
                <a href="#portfolio" className="menu" style={{color:style[2]}} >Me</a>
                <a href="#services" className="menu" style={{color:style[3]}} >Services</a>
                <a href="#contact" className="menu" style={{color:style[4]}} >Contact</a>
            </div>
            <div className="title">
                <a href="/"className="logo">Ventilimos Consulting</a>
            </div>
            <div className="right">
            </div>
            
        </div>
        
       
       
    </div>
  )
}
