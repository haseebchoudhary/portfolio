import Section from './Section'
import { education } from '../data/cv'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="education">
        {education.map((item) => (
          <li className="education__item" key={item.title}>
            <p className="education__period">{item.period}</p>
            <div>
              <h3 className="education__title">{item.title}</h3>
              <p className="education__place">{item.place}</p>
              {item.note && <p className="education__note">{item.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
