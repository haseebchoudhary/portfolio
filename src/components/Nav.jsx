import { person } from '../data/cv'

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a className="nav__name" href="#top">
          <img
            className="nav__avatar"
            src={person.photo}
            width={40}
            height={40}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <span>{person.name}</span>
        </a>
        <nav className="nav__menu" aria-label="Primary">
          <ul className="nav__links">
            {links.map(([label, href]) => (
              <li key={href}>
                <a className="link" href={href}>
                  {label}
                </a>
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
