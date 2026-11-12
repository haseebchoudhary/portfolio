import Section from './Section'
import { about, education } from '../data/cv'

const base = import.meta.env.BASE_URL
const photoSrc = `${base}taste/img/photo-d183.webp`
const photoSrcSet = `${base}taste/img/photo-d183-500.webp 500w, ${base}taste/img/photo-d183-960.webp 960w, ${base}taste/img/photo-d183.webp 1280w`

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about__text prose">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <dl className="facts">
            {about.facts.map(([term, value]) => (
              <div className="facts__row" key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="about__education">
            <h3>Education</h3>
            <ul className="edu-list">
              {education.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <br />
                  {item.place}
                  {item.note ? ` — ${item.note}` : ''}
                  <br />
                  <span className="muted">{item.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <figure className="about__figure">
          <img
            className="about__photo"
            src={photoSrc}
            srcSet={photoSrcSet}
            sizes="(max-width: 1000px) 100vw, 320px"
            width={1280}
            height={853}
            alt="Notebook and pencil on a wooden desk, stock photograph"
            loading="lazy"
            decoding="async"
            data-source="library-057"
            data-subject="desk"
          />
        </figure>
      </div>
    </Section>
  )
}
