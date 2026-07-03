import { profile } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React &
        TypeScript ·{' '}
        <a href={profile.sourceRepo} target="_blank" rel="noreferrer">
          View source
        </a>
      </p>
    </footer>
  )
}

export default Footer
