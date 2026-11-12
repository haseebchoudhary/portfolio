import Section from './Section'
import { person } from '../data/cv'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p className="contact__lead">
          {person.availability} Email is the quickest way to reach me.
        </p>
        <a className="contact__email" href={`mailto:${person.email}`}>
          {person.email}
        </a>
        <div className="contact__actions">
          <a className="btn" href={`mailto:${person.email}`}>
            Email me
          </a>
          <a className="btn btn--ghost" href={person.cvPath} download>
            Download CV
          </a>
        </div>
        <ul className="contact__links">
          <li>
            <a href={`https://github.com/${person.github}`} target="_blank" rel="noreferrer noopener">
              <img
                className="contact__gh"
                src={`${import.meta.env.BASE_URL}icons/github.svg`}
                alt=""
                width={20}
                height={20}
                decoding="async"
              />
              GitHub {person.github}
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}
