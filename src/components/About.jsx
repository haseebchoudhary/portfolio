import Section from './Section'
import Portrait from './Portrait'
import { about } from '../data/cv'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about__text prose">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <figure className="about__figure">
          <Portrait />
          <figcaption>
            <dl className="facts">
              {about.facts.map(([term, value]) => (
                <div className="facts__row" key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
