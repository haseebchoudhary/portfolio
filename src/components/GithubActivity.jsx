import { useEffect, useState } from 'react'
import Section from './Section'
import { person } from '../data/cv'

const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

function timeAgo(iso) {
  const days = Math.round((new Date(iso).getTime() - Date.now()) / 86400000)
  if (Math.abs(days) < 30) return relative.format(days, 'day')
  if (Math.abs(days) < 365) return relative.format(Math.round(days / 30), 'month')
  return relative.format(Math.round(days / 365), 'year')
}

export default function GithubActivity() {
  const [state, setState] = useState({ status: 'loading', repos: [] })

  useEffect(() => {
    const controller = new AbortController()
    fetch(`https://api.github.com/users/${person.github}/repos?sort=pushed&per_page=12&type=owner`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`)
        return response.json()
      })
      .then((data) => {
        const repos = data.filter((repo) => !repo.fork).slice(0, 6)
        setState({ status: 'ready', repos })
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setState({ status: 'error', repos: [] })
      })
    return () => controller.abort()
  }, [])

  const profileUrl = `https://github.com/${person.github}`

  return (
    <Section id="github" title="GitHub">
      <div aria-live="polite">
        {state.status === 'loading' && <p className="muted">Loading recent repositories.</p>}
        {state.status === 'error' && (
          <p className="muted">
            Recent repositories could not be loaded. Browse them on{' '}
            <a href={profileUrl}>github.com/{person.github}</a>.
          </p>
        )}
        {state.status === 'ready' && state.repos.length === 0 && (
          <p className="muted">
            No public repositories yet. Visit <a href={profileUrl}>github.com/{person.github}</a>.
          </p>
        )}
        {state.status === 'ready' && state.repos.length > 0 && (
          <ul className="repos">
            {state.repos.map((repo) => (
              <li className="repo" key={repo.id}>
                <a className="repo__name" href={repo.html_url} target="_blank" rel="noreferrer noopener">
                  {repo.name}
                </a>
                <p className="repo__desc">{repo.description || 'No description provided.'}</p>
                <p className="repo__meta">
                  {repo.language ? `${repo.language}. ` : ''}
                  Updated {timeAgo(repo.pushed_at)}.
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
