import { useState } from 'react'
import Section from './Section'
import { projects } from '../data/cv'
import ProjectGallery from './ProjectGallery'

function ProjectVisual({ project, variant }) {
  if (variant === 'gallery' && project.gallery?.length) {
    return <ProjectGallery pages={project.gallery} label={project.name} />
  }
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
      <div
        className="project__panel"
        id={panelId}
        role="region"
        aria-label={`${project.name} details`}
        hidden={!open}
      >
        {open ? (
        <div className="project__panel-inner">
          {project.gallery?.length ? (
            <div className="project__panel-visual">
              <ProjectVisual project={project} variant="gallery" />
            </div>
          ) : null}
          <div className="project__panel-body">
            <div className="project__details prose">
              {!project.gallery?.length ? <ProjectVisual project={project} /> : null}
              <h4>Context</h4>
            <p>{project.context}</p>
            <h4>What I built</h4>
            <ul>
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.contributions?.length > 0 && (
              <ul className="project__contrib">
                {project.contributions.map((repo) => (
                  <li key={repo.name}>
                    <a href={repo.pullsUrl} target="_blank" rel="noreferrer noopener">
                      evolvingbits/{repo.name}
                    </a>
                    {' — '}
                    <strong>{repo.pullRequests}</strong> pull requests
                  </li>
                ))}
              </ul>
            )}
            {project.repoStats && (
              <p className="project__repo-stats">
                GitHub:{' '}
                {project.repoStats.pullRequests != null ? (
                  <>
                    <strong>{project.repoStats.pullRequests}</strong> pull requests
                  </>
                ) : (
                  <>
                    <strong>{project.repoStats.branches} branches</strong>
                    {' · '}
                    <strong>{project.repoStats.commits} commits</strong>
                    {project.repoStats.private ? ' (private repo)' : ' on default branch'}
                  </>
                )}
              </p>
            )}
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
        ) : null}
      </div>
    </li>
  )
}

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0].id)

  return (
    <Section id="projects" title="Projects" tall>
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
