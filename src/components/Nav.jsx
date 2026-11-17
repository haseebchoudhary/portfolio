import { useEffect, useRef } from 'react'
import { person } from '../data/cv'

const links = [
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

function syncNavHeight(el) {
  if (!el) return
  const height = Math.ceil(el.getBoundingClientRect().height)
  document.documentElement.style.setProperty('--nav-h', `${height}px`)
}

export default function Nav() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return undefined

    const onResize = () => syncNavHeight(el)
    syncNavHeight(el)
    const ro = new ResizeObserver(onResize)
    ro.observe(el)
    window.addEventListener('resize', onResize)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header className="nav" ref={headerRef}>
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