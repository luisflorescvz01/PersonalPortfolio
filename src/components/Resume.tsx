import { profile } from '../data'

function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">
        <span className="accent">04.</span> Résumé
      </h2>
      <div className="resume-viewer">
        <iframe
          src={`${profile.resumeUrl}#view=FitH`}
          title="Résumé of Luis Flores"
          className="resume-frame"
        />
      </div>
      <p className="resume-fallback">
        The preview doesn't load on some mobile browsers — you can open it
        directly instead.
      </p>
      <div className="resume-actions">
        <a
          className="btn btn-primary"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open full screen
        </a>
        <a
          className="btn btn-outline"
          href={profile.resumeUrl}
          download="Luis-Flores-Resume.pdf"
        >
          Download PDF
        </a>
      </div>
    </section>
  )
}

export default Resume
