import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks'
import fx from '../taste/effects/fx.js'
import contourLines from '../taste/effects/contour-lines/effect.js'

const FX_PARAMS = {
  levels: 22,
  scale: 1.35,
  lineWidth: 1,
  indexEvery: 5,
  opacity: 0.16,
  speed: 0.014,
  tint: 0.72,
  shade: 0.92,
  edge: 0.35,
  calm: 0.9,
  calmX: 0.4,
  calmY: 0.5,
}

export default function HeroShader() {
  const reduced = usePrefersReducedMotion()
  const groundRef = useRef(null)
  const ctrlRef = useRef(null)

  useEffect(() => {
    const el = groundRef.current
    if (!el || reduced) return undefined

    let disposed = false

    fx.mount(el, contourLines, { params: FX_PARAMS, seed: '14' }).then((c) => {
      if (disposed) {
        c?.destroy?.()
        return
      }
      ctrlRef.current = c
    })

    return () => {
      disposed = true
      ctrlRef.current?.destroy?.()
      ctrlRef.current = null
    }
  }, [reduced])

  const className = reduced ? 'hero__shader hero__shader--still' : 'hero__shader'

  return (
    <div
      ref={groundRef}
      className={className}
      aria-hidden="true"
    />
  )
}
