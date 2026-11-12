import ArchDiagram from './ArchDiagram'
import { hero, person } from '../data/cv'

export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 className="hero__title reveal" id="hero-title">
          {hero.headline}
        </h1>
        <p className="hero__lede reveal reveal--2">{hero.lede}</p>
        <div className="hero__actions reveal reveal--3">
          <a className="btn" href={`mailto:${person.email}`}>
            Email me
          </a>
          <a className="btn btn--ghost" href={person.cvPath} download>
            Download CV
          </a>
        </div>
        <p className="hero__availability reveal reveal--3">{person.availability}</p>
      </div>
      <div className="hero__diagram">
        <ArchDiagram />
      </div>
    </section>
  )
}
