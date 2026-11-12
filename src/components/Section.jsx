export default function Section({ id, title, children }) {
  return (
    <section className="section wrap" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section__title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  )
}
