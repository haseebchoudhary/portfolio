import { hero, lexiqamusSite, person } from '../data/cv'

const heroShot = `${import.meta.env.BASE_URL}projects/lexiqamus-modal-hover.jpg`

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__inner wrap">
        <div className="hero__text">
          <h1 className="hero__title" id="hero-title">
            {hero.headline}
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="btn" href={`mailto:${person.email}`}>
              Email me
            </a>
          </div>
          <p className="hero__availability">
            {person.location}. {person.availability}
          </p>
        </div>
        <div className="hero__visual">
          <figure className="app-frame hero__shot">
            <img
              className="hero__shot-img"
              src={heroShot}
              alt={
                lexiqamusSite.gallery?.find((p) => p.src.includes('modal-hover'))?.alt ??
                lexiqamusSite.imageAlt
              }
              width={1420}
              height={900}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="hero__shot-caption">
              <a href={lexiqamusSite.href} target="_blank" rel="noreferrer noopener">
                {lexiqamusSite.label}
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}