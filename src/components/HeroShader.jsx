import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks'
import fx from '../taste/effects/fx.js'
import contourLines from '../taste/effects/contour-lines/effect.js'

const FX_PARAMS = {
  levels: 28,
  scale: 1.4,
  lineWidth: 1,
  indexEvery: 5,
  opacity: 0.42,
  speed: 0.018,
  tint: 0.55,
  shade: 0.45,
  edge: 0.55,
  calm: 0.85,
  calmX: 0.35,
  calmY: 0.55,
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
