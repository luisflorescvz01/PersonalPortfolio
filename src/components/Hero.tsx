import { profile } from '../data'

function Hero() {
  return (
    <section id="top" className="hero-section">
      <p className="hero-kicker">Hi, my name is</p>
      <h1 className="hero-name">{profile.fullName}</h1>
      <h2 className="hero-role">{profile.role}</h2>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View my work
        </a>
        <a className="btn btn-outline" href="#contact">
          Get in touch
        </a>
        <a className="btn btn-outline" href="#resume">
          View résumé
        </a>
      </div>
    </section>
  )
}

export default Hero
