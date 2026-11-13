import Section from './Section'
import { about, education, person } from '../data/cv'

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
        <figure className="about__figure m-zoom linked">
          <img
            className="about__photo"
            src={person.photo}
            width={900}
            height={900}
            alt={person.photoAlt}
            loading="lazy"
            decoding="async"
            data-source="client"
            data-subject="portrait"
          />
        </figure>
      </div>
    </Section>
  )
}
