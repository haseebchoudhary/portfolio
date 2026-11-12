import { useEffect, useRef } from 'react'
import Section from './Section'
import { experience } from '../data/cv'
import { usePrefersReducedMotion } from '../hooks'

export default function Experience() {
  const listRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const list = listRef.current
    if (!list || reduced) {
      list?.style.setProperty('--progress', '1')
      return undefined
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = list.getBoundingClientRect()
      const focus = window.innerHeight * 0.55
      const progress = Math.min(1, Math.max(0, (focus - rect.top) / rect.height))
      list.style.setProperty('--progress', progress.toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reduced])

  return (
    <Section id="experience" title="Experience">
      <ol className="timeline" ref={listRef}>
        {experience.map((job) => (
          <li className="timeline__item" key={job.period}>
            <p className="timeline__period">{job.period}</p>
            <div className="timeline__content">
              <h3 className="timeline__role">
                {job.role}, {job.org}
              </h3>
              <p className="timeline__project">
                Project:{' '}
                {job.projectUrl ? (
                  <a href={job.projectUrl} target="_blank" rel="noreferrer noopener">
                    {job.project}
                  </a>
                ) : (
                  job.project
                )}
              </p>
              <ul className="timeline__points prose">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
