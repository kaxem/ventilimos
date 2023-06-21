import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="imgContainer">
        <img className="img" src="/assests/lighthouse.jpg" alt=""/>
      </div>
      <div className="description">
      <h3>Ventilimos is dedicated to:</h3>
        <br/>
        <div className="text">
        <p className="left">
         <h5>Vision</h5>
         To support tech-driven SMBS and professinals, fostering growth and
         professionals satisfaction in competetive markets.
        </p>
        <br/>
        <p className="right">
          <h5>Mission</h5>
          To be your growth partner, wheter you're a scaling business or an individual
          transitioning into leadership.
       </p>
       </div>
      </div>
    
    </div>
  )
}
