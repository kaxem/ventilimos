import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="description">
      <h2>Ventilimos is dedicated to:</h2>
      <br/>
      <p>
        Vision<br/>
        To support tech-driven SMBS and professinals, fostering growth and <br/>
        professionals satisfaction in competetive markets.
      </p>
      <br/>
      <p>
        Mission<br/>
        To be your growth partner, wheter you're a scaling business or an individual <br/>
        transitioning into leadership.
      </p>
      </div>
      <div className="imgContainer">
        <img className="img" src="/assests/lighthouse.jpg" alt=""/>
      </div>
    </div>
  )
}
