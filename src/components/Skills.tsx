import { skillGroups } from '../data'

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        <span className="accent">02.</span> Skills
      </h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li className="tag" key={skill.name}>
                  {skill.icon && (
                    <img
                      className={`tag-icon${skill.invertOnDark ? ' invert' : ''}`}
                      src={skill.icon}
                      alt=""
                      width="16"
                      height="16"
                      loading="lazy"
                    />
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
