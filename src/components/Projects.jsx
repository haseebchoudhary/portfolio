import { useState } from 'react'
import Section from './Section'
import { projects } from '../data/cv'

function Project({ project, open, onToggle }) {
  const panelId = `project-${project.id}`
  return (
    <li className={open ? 'project project--open' : 'project'}>
      <h3 className="project__heading">
        <button
          type="button"
          className="project__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="project__name">{project.name}</span>
          <span className="project__summary">{project.summary}</span>
          <span className="project__kind">{project.kind}</span>
          <span className="project__icon" aria-hidden="true" />
        </button>
      </h3>
      <div className="project__panel" id={panelId} role="region" aria-label={`${project.name} details`}>
        <div className="project__panel-inner">
          <div className="project__details prose">
            <h4>Context</h4>
            <p>{project.context}</p>
            <h4>What I built</h4>
            <ul>
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.link && (
              <p>
                <a href={project.link.href} target="_blank" rel="noreferrer noopener">
                  {project.link.label}
                </a>
              </p>
            )}
          </div>
          <div className="project__stack">
            <h4>Stack</h4>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0].id)

  return (
    <Section id="projects" title="Projects">
      <ul className="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            open={openId === project.id}
            onToggle={() => setOpenId(openId === project.id ? null : project.id)}
          />
        ))}
      </ul>
    </Section>
  )
}
