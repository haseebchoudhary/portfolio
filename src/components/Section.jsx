const KICKERS = {
  about: '01',
  experience: '02',
  projects: '03',
  skills: '04',
  contact: '05',
}

export default function Section({ id, title, children, tall = false }) {
  return (
    <section
      className={tall ? 'section section--tall' : 'section'}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="wrap section__grid">
        <header className="section__head">
          <p className="section__kicker">{KICKERS[id] ?? ''}</p>
          <h2 className="section__title" id={`${id}-title`}>
            {title}
          </h2>
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
