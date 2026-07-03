import { projects } from '../data'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        <span className="accent">03.</span> Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="skill-tags">
              {project.tech.map((tech) => (
                <li className="tag" key={tech.name}>
                  {tech.icon && (
                    <img
                      className={`tag-icon${tech.invertOnDark ? ' invert' : ''}`}
                      src={tech.icon}
                      alt=""
                      width="16"
                      height="16"
                      loading="lazy"
                    />
                  )}
                  {tech.name}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Source code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
