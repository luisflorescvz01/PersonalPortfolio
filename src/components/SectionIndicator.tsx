import { useEffect, useState } from 'react'

const sections = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function SectionIndicator() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    // A section is "active" while it crosses the vertical center of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="section-indicator" aria-label="Page sections">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`indicator-dot${active === section.id ? ' active' : ''}`}
              aria-label={section.label}
              aria-current={active === section.id ? 'true' : undefined}
            >
              <span className="indicator-label">{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SectionIndicator
