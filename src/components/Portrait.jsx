// An abstract drafted portrait: a head and shoulders built from construction
// circles on a grid. It is a stand-in, not a likeness.
export default function Portrait() {
  const gridLines = []
  for (let i = 20; i < 360; i += 20) {
    gridLines.push(<line key={`v${i}`} x1={i} y1="0" x2={i} y2="440" />)
  }
  for (let i = 20; i < 440; i += 20) {
    gridLines.push(<line key={`h${i}`} x1="0" y1={i} x2="360" y2={i} />)
  }

  return (
    <svg
      className="portrait"
      viewBox="0 0 360 440"
      role="img"
      aria-label="Abstract drawing of a head and shoulders on a grid"
    >
      <rect className="portrait__sheet" width="360" height="440" />
      <g className="portrait__grid">{gridLines}</g>

      <path
        className="portrait__body"
        d="M36 440 C36 332 104 276 180 276 C256 276 324 332 324 440 Z"
      />
      <rect className="portrait__neck" x="154" y="214" width="52" height="70" />
      <circle className="portrait__head" cx="180" cy="168" r="74" />
      <circle className="portrait__construct" cx="180" cy="168" r="46" />
      <line className="portrait__construct" x1="180" y1="70" x2="180" y2="440" />
      <line className="portrait__construct" x1="90" y1="150" x2="270" y2="150" />
      <circle className="portrait__dot" cx="266" cy="96" r="20" />
      <path className="portrait__dim" d="M106 40 H254 M106 34 V46 M254 34 V46" />
    </svg>
  )
}
