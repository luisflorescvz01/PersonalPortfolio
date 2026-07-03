import { profile } from '../data'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">
        <span className="accent">04.</span> Contact
      </h2>
      <p className="contact-blurb">
        I'm currently open to new opportunities. Whether you have a role in
        mind, a question, or just want to say hi — my inbox is open.
      </p>
      <a className="btn btn-primary contact-cta" href={`mailto:${profile.email}`}>
        Say hello
      </a>
      <ul className="contact-links">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a
            href={`https://wa.me/${profile.phone.replace(/[^\d]/g, '')}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.phone}
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
