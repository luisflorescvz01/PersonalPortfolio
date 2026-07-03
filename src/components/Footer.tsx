import { profile } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React &
        TypeScript
      </p>
    </footer>
  )
}

export default Footer
