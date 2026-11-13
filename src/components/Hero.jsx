import ArchDiagram from './ArchDiagram'
import HeroShader from './HeroShader'
import { hero, person } from '../data/cv'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <HeroShader />
      <div className="hero__inner wrap">
        <div className="hero__text">
          <p className="hero__fact">
            <span className="hero__pill">{hero.fact}</span>
          </p>
          <h1 className="hero__title" id="hero-title">
            {hero.headline}
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="btn" href={`mailto:${person.email}`}>
              Email me
            </a>
            <a className="btn btn--ghost" href={person.cvPath} download>
              Download CV
            </a>
          </div>
          <p className="hero__availability">{person.availability}</p>
        </div>
        <div className="hero__visual">
          <div className="app-frame">
            <ArchDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
