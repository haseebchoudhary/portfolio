import { useCallback, useState } from 'react'

function Chevron({ direction }) {
  return (
    <svg
      className="gallery-arrow__icon"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={direction === 'prev' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ProjectGallery({ pages, label }) {
  const [index, setIndex] = useState(0)
  const last = pages.length - 1

  const go = useCallback(
    (delta) => {
      setIndex((i) => Math.min(last, Math.max(0, i + delta)))
    },
    [last],
  )

  const page = pages[index]

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  return (
    <div className="project__gallery-wrap" data-gallery={label}>
      <div
        className="project__gallery-frame"
        role="group"
        aria-label={`${label} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <span className="project__gallery-index" aria-hidden="true">
          {index + 1} / {pages.length}
        </span>

        <figure className="project__gallery-stage" aria-live="polite" aria-atomic="true">
          <div className="project__gallery-media m-zoom">
            <img
              key={page.src}
              src={page.src}
              alt={page.alt}
              width={1440}
              height={900}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              data-source="client"
              data-subject="lexiqamus-interface"
            />
          </div>
        </figure>

        <button
          type="button"
          className="gallery-arrow gallery-arrow--prev"
          onClick={(e) => {
            e.stopPropagation()
            go(-1)
          }}
          disabled={index === 0}
          aria-label="Previous screenshot"
        >
          <Chevron direction="prev" />
        </button>

        <button
          type="button"
          className="gallery-arrow gallery-arrow--next"
          onClick={(e) => {
            e.stopPropagation()
            go(1)
          }}
          disabled={index === last}
          aria-label="Next screenshot"
        >
          <Chevron direction="next" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Screenshot {index + 1} of {pages.length}. {page.alt}
      </p>
    </div>
  )
}
