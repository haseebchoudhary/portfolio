import { person } from '../data/cv'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="nav__name" href="#top">
          {person.name}
        </a>
        <nav className="nav__menu" aria-label="Primary">
          <ul className="nav__links">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--small" href={person.cvPath} download>
          Download CV
        </a>
      </div>
    </header>
  )
}
