import "./Topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#home" className="menu">Home</a>
                <a href="#about" className="menu">About</a>
                <a href="#portfolio" className="menu">Me</a>
                <a href="#services" className="menu">Services</a>
                <a href="#contact" className="menu">Contact</a>
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
