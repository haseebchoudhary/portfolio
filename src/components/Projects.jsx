import { useState } from 'react'
import Section from './Section'
import { lexiqamusSite, projects } from '../data/cv'

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project__visual linked">
        <img
          src={project.image}
          alt={project.imageAlt ?? ''}
          width={1400}
          height={1260}
          sizes="(max-width: 768px) 100vw, 542px"
          loading="lazy"
          decoding="async"
          data-source="client"
          data-subject="lexiqamus-interface"
          onError={(e) => {
            const img = e.currentTarget
            if (lexiqamusSite.imageRemote && img.src !== lexiqamusSite.imageRemote) {
              img.src = lexiqamusSite.imageRemote
            }
          }}
        />
      </div>
    )
  }
  if (project.diagram) {
    return (
      <div className="project__diagram">
        <strong>Architecture</strong>
        <p>{project.diagram}</p>
      </div>
    )
  }
  return null
}

function Project({ project, open, onToggle }) {
  const panelId = `project-${project.id}`
  return (
    <li className={open ? 'project project--open linked' : 'project linked'}>
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
            <ProjectVisual project={project} />
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
            onToggle={() => setOpenId(project.id)}
          />
        ))}
      </ul>
    </Section>
  )
}
