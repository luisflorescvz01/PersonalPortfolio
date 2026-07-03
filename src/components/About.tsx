import { profile } from '../data'

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="accent">01.</span> About Me
      </h2>
      <div className="about-body">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <p className="about-location">📍 Based in {profile.location}</p>
        <p className="about-location">🗣️ {profile.languages}</p>
      </div>
    </section>
  )
}

export default About
