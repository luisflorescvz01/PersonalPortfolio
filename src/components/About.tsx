import { profile } from '../data'

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="accent">01.</span> About Me
      </h2>
      <div className="about-body">
        {profile.about.map((sub) => (
          <div className="about-subsection" key={sub.heading}>
            <h3 className="about-subheading">{sub.heading}</h3>
            {sub.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        ))}
        <p className="about-closing">{profile.aboutClosing}</p>
        <p className="about-location">📍 Based in {profile.location}</p>
        <p className="about-location">🗣️ {profile.languages}</p>
      </div>
    </section>
  )
}

export default About
