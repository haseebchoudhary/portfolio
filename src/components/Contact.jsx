import Section from './Section'
import { githubRepos, person } from '../data/cv'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p className="contact__lead">{person.availability}</p>
        <a className="contact__email link" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        {person.phone && (
          <a className="contact__phone link" href={`tel:${person.phoneTel}`}>
            {person.phone}
          </a>
        )}
        <div className="contact__actions">
          <a className="btn" href={`mailto:${person.email}`}>
            Email me
          </a>
          <a className="btn btn--ghost" href={person.cvPath} download>
            Download CV
          </a>
        </div>
        <ul className="contact__links">
          <li>
            <a
              className="link"
              href={`https://github.com/${person.github}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="contact__gh"
                src={`${import.meta.env.BASE_URL}icons/github.svg`}
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                decoding="async"
              />
              GitHub {person.github}
            </a>
          </li>
        </ul>
        <div className="contact__repos">
          <h3 className="contact__repos-title">GitHub highlights</h3>
          <ul className="repo-list">
            {githubRepos.map((repo) => (
              <li key={repo.name}>
                <a
                  className="link"
                  href={repo.pullsUrl ?? repo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {repo.owner}/{repo.name}
                </a>
                <span className="repo-list__stats">
                  {repo.pullRequests != null
                    ? `${repo.pullRequests} pull requests`
                    : `${repo.branches} branches · ${repo.commits} commits`}
                  {repo.private ? ' · private' : ''}
                </span>
                <span className="repo-list__note muted">{repo.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
