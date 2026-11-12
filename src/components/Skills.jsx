import Section from './Section'
import { skills } from '../data/cv'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((row) => (
          <div className="skills__row" key={row.group}>
            <h3 className="skills__group">{row.group}</h3>
            <ul className="skills__items">
              {row.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
