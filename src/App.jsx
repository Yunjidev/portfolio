import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ─── hex grid constants ─────────────────────────────────────────── */
const S       = 38
const COLS    = 18
const ROWS    = 13
const CW      = S * 1.5
const RH      = S * Math.sqrt(3)
const W       = COLS * CW + S
const H       = ROWS * RH + S
const HOVER_R = 115

const HEXES = (() => {
  const list = []
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const cx = c * CW + S
      const cy = r * RH + (c % 2 ? RH / 2 : 0) + RH / 2
      const dc = (COLS - 1 - c) / (COLS - 1)
      const dr = r / (ROWS - 1)
      list.push({ id: `${c},${r}`, cx, cy, delay: (Math.hypot(dc, dr) / Math.SQRT2) * 0.9 })
    }
  }
  return list
})()

function hexPts(cx, cy) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    return `${(cx + (S - 2) * Math.cos(a)).toFixed(1)},${(cy + (S - 2) * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

function HexGrid() {
  const svgRef = useRef(null)
  const [mouse, setMouse] = useState(null)

  useEffect(() => {
    const onMove = (e) => {
      const svg = svgRef.current
      if (!svg) return
      const b = svg.getBoundingClientRect()
      // Convert screen pixels → SVG viewBox coordinates
      const scaleX = W / b.width
      const scaleY = H / b.height
      const x = (e.clientX - b.left) * scaleX
      const y = (e.clientY - b.top) * scaleY
      setMouse(x >= 0 && x <= W && y >= 0 && y <= H ? { x, y } : null)
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="fixed top-0 right-0 pointer-events-none select-none z-0 hidden lg:block"
      style={{ height: '100vh', width: `${((W / H) * 100).toFixed(2)}vh` }}
      aria-hidden="true"
    >
      <defs>
        {/* Diagonal linear gradient: top-right (opaque) → bottom-left (transparent) = triangle shape */}
        <linearGradient id="hexFade" x1={W} y1="0" x2="0" y2={H} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="38%"  stopColor="white" stopOpacity="0.65" />
          <stop offset="65%"  stopColor="white" stopOpacity="0.1" />
          <stop offset="80%"  stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="hexMask">
          <rect width={W} height={H} fill="url(#hexFade)" />
        </mask>
        <style>{`
          @keyframes hexIn {
            from { opacity: 0; transform-box: fill-box; transform: scale(0.4); }
            to   { opacity: 1; transform-box: fill-box; transform: scale(1); }
          }
        `}</style>
      </defs>
      <g mask="url(#hexMask)">
        {HEXES.map(({ id, cx, cy, delay }) => {
          const d = mouse ? Math.hypot(cx - mouse.x, cy - mouse.y) : Infinity
          const t = d < HOVER_R ? (1 - d / HOVER_R) ** 2 : 0
          return (
            <polygon
              key={id}
              points={hexPts(cx, cy)}
              fill={`rgba(129,216,208,${(t * 0.15).toFixed(4)})`}
              stroke="rgba(129,216,208,0.12)"
              strokeWidth={1}
              style={{ animation: `hexIn .45s cubic-bezier(.22,1,.36,1) ${delay.toFixed(2)}s both` }}
            />
          )
        })}
      </g>
    </svg>
  )
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col items-center relative">
      {/* Hex grid overlay — top-right, fades toward bottom-left */}
      <HexGrid />

      {/* Background ambiance */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-tiffany rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.1] pointer-events-none z-0"></div>

      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
