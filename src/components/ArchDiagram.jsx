import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks'

// Three layers of a typical Rails + React system, drawn in 3D and rotated in
// JavaScript. Coordinates are world units; x and z run across a layer, y is
// the layer height.
const LAYERS = [
  { id: 'client', y: -1.9, label: 'Client' },
  { id: 'app', y: 0, label: 'Application' },
  { id: 'data', y: 1.9, label: 'Data and services' },
]

const NODES = [
  { id: 'react', label: 'React dashboard', x: -2.0, y: -1.9, z: 0.8, w: 128 },
  { id: 'stimulus', label: 'Stimulus and ERB', x: 1.9, y: -1.9, z: -0.9, w: 128 },
  { id: 'auth', label: 'Devise and Pundit', x: -2.3, y: 0, z: -1.0, w: 132 },
  { id: 'rails', label: 'Rails application', x: 0, y: 0, z: 0.2, w: 140, hero: true },
  { id: 'cable', label: 'ActionCable', x: 2.1, y: 0, z: 1.0, w: 108 },
  { id: 'pg', label: 'PostgreSQL', x: -2.2, y: 1.9, z: 0.6, w: 104 },
  { id: 'redis', label: 'Redis', x: 0.2, y: 1.9, z: -1.9, w: 84 },
  { id: 'sidekiq', label: 'Sidekiq', x: 2.0, y: 1.9, z: 0.2, w: 96 },
  { id: 'ai', label: 'Vision and ML APIs', x: -0.2, y: 1.9, z: 2.0, w: 136 },
]

const EDGES = [
  { from: 'react', to: 'rails' },
  { from: 'stimulus', to: 'rails' },
  { from: 'rails', to: 'auth' },
  { from: 'rails', to: 'cable' },
  { from: 'cable', to: 'react', dashed: true },
  { from: 'rails', to: 'pg' },
  { from: 'rails', to: 'redis' },
  { from: 'rails', to: 'sidekiq' },
  { from: 'sidekiq', to: 'redis' },
  { from: 'sidekiq', to: 'ai' },
]

const NODE_BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]))

const VIEW_W = 800
const VIEW_H = 640
const CX = VIEW_W / 2
const CY = VIEW_H / 2
const SCALE = 62
const CAMERA = 14
const PLATE = 3.0
const BASE_ANGLE = 0.7
const BASE_TILT = 0.5

function project(p, angle, tilt) {
  const ca = Math.cos(angle)
  const sa = Math.sin(angle)
  const x = p.x * ca + p.z * sa
  const z0 = -p.x * sa + p.z * ca
  const ct = Math.cos(tilt)
  const st = Math.sin(tilt)
  const y = p.y * ct - z0 * st
  const z = p.y * st + z0 * ct
  const k = CAMERA / (CAMERA + z)
  return { sx: CX + x * SCALE * k, sy: CY + y * SCALE * k, k, z }
}

export default function ArchDiagram() {
  const reduced = usePrefersReducedMotion()
  const wrapRef = useRef(null)
  const pointer = useRef({ x: 0, y: 0, sx: 0, sy: 0 })
  const visible = useRef(true)
  const [frame, setFrame] = useState({ angle: BASE_ANGLE, tilt: BASE_TILT, t: 0 })

  useEffect(() => {
    if (reduced) {
      setFrame({ angle: BASE_ANGLE, tilt: BASE_TILT, t: 0 })
      return undefined
    }

    let raf = 0
    let last = performance.now()
    let spin = BASE_ANGLE
    let t = 0

    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting
    })
    if (wrapRef.current) observer.observe(wrapRef.current)

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (visible.current) {
        const p = pointer.current
        p.sx += (p.x - p.sx) * 0.06
        p.sy += (p.y - p.sy) * 0.06
        spin += dt * 0.14
        t += dt
        setFrame({ angle: spin + p.sx * 0.6, tilt: BASE_TILT + p.sy * 0.14, t })
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [reduced])

  const onPointerMove = (event) => {
    const rect = wrapRef.current.getBoundingClientRect()
    pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.current.y = ((event.clientY - rect.top) / rect.height) * 2 - 1
  }
  const onPointerLeave = () => {
    pointer.current.x = 0
    pointer.current.y = 0
  }

  const { angle, tilt, t } = frame

  const projected = {}
  NODES.forEach((n) => {
    projected[n.id] = project(n, angle, tilt)
  })

  const plates = LAYERS.map((layer) => {
    const corners = [
      [-PLATE, PLATE],
      [PLATE, PLATE],
      [PLATE, -PLATE],
      [-PLATE, -PLATE],
    ].map(([x, z]) => project({ x, y: layer.y, z }, angle, tilt))
    const center = project({ x: 0, y: layer.y, z: 0 }, angle, tilt)
    return {
      ...layer,
      points: corners.map((c) => `${c.sx.toFixed(1)},${c.sy.toFixed(1)}`).join(' '),
      depth: center.z,
      labelY: center.sy,
    }
  }).sort((a, b) => b.depth - a.depth)

  const nodesByDepth = [...NODES].sort((a, b) => projected[b.id].z - projected[a.id].z)

  return (
    <figure className="arch">
      <div
        className="arch__stage"
        ref={wrapRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <svg
          className="arch__svg"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          role="img"
          aria-labelledby="arch-title arch-desc"
        >
          <title id="arch-title">Architecture of a Rails and React system</title>
          <desc id="arch-desc">
            A rotating three-layer diagram. The client layer holds a React dashboard and
            Stimulus views. The application layer holds the Rails app, authentication and
            ActionCable. The data layer holds PostgreSQL, Redis, Sidekiq and external vision
            and machine learning APIs.
          </desc>

          {plates.map((plate) => (
            <g key={plate.id}>
              <polygon className="arch__plate" points={plate.points} />
              <text className="arch__layer" x="14" y={plate.labelY}>
                {plate.label}
              </text>
            </g>
          ))}

          {EDGES.map((edge, i) => {
            const a = projected[edge.from]
            const b = projected[edge.to]
            const phase = (t * 0.18 + i * 0.37) % 1
            const px = a.sx + (b.sx - a.sx) * phase
            const py = a.sy + (b.sy - a.sy) * phase
            return (
              <g key={`${edge.from}-${edge.to}`}>
                <line
                  className={edge.dashed ? 'arch__edge arch__edge--dashed' : 'arch__edge'}
                  x1={a.sx}
                  y1={a.sy}
                  x2={b.sx}
                  y2={b.sy}
                />
                {!reduced && <circle className="arch__packet" cx={px} cy={py} r="3.4" />}
              </g>
            )
          })}

          {nodesByDepth.map((node) => {
            const p = projected[node.id]
            const opacity = Math.max(0.5, Math.min(1, 0.5 + (p.k - 0.8) * 1.3))
            return (
              <g
                key={node.id}
                className={node.hero ? 'arch__node arch__node--hero' : 'arch__node'}
                transform={`translate(${p.sx.toFixed(1)} ${p.sy.toFixed(1)}) scale(${p.k.toFixed(3)})`}
                opacity={opacity}
              >
                <rect x={-node.w / 2} y="-18" width={node.w} height="36" rx="2" />
                <text textAnchor="middle" dy="4.5">
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
      <figcaption className="arch__caption">
        The shape of the Rails and React systems I build. Move the pointer across the diagram to
        turn it.
      </figcaption>
    </figure>
  )
}
