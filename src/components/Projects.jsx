import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects.js'

const N = projects.length
const CARD_W = 380
const CARD_STEP = 430

const badgeColors = {
  Freelance: 'bg-tiffany/10 text-tiffany border-tiffany/20',
  Live: 'bg-green-500/10 text-green-400 border-green-500/20',
  Projet: 'bg-white/5 text-white/50 border-white/10',
}

function getOffset(i, current) {
  let off = i - current
  if (off > N / 2) off -= N
  if (off < -N / 2) off += N
  return off
}

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + N) % N), [])
  const next = useCallback(() => setCurrent((i) => (i + 1) % N), [])

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 44) dx < 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <section id="work" className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Mes réalisations
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            Une sélection de projets web que j'ai conçus et développés.
          </p>
        </div>
        <a
          href="https://github.com/Yunjidev"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-tiffany hover:text-white transition-colors flex items-center gap-1.5 flex-shrink-0"
        >
          Voir GitHub
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Zone scrollable avec overflow caché */}
        <div
          className="relative min-h-[500px] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((project, i) => {
            const off = getOffset(i, current)
            const isActive = off === 0
            const absOff = Math.abs(off)
            const visible = absOff <= 2

            return (
              <motion.div
                key={project.id}
                className="absolute top-0 cursor-pointer"
                style={{
                  width: CARD_W,
                  left: `calc(50% - ${CARD_W / 2}px)`,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
                animate={{
                  x: off * CARD_STEP,
                  scale: isActive ? 1 : Math.max(0.82, 1 - absOff * 0.07),
                  opacity: !visible ? 0 : isActive ? 1 : Math.max(0, 0.52 - absOff * 0.18),
                  zIndex: isActive ? 10 : Math.max(0, 8 - absOff * 2),
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 34 }}
                onClick={() => { if (!isActive) setCurrent(i) }}
              >
                <ProjectCard project={project} isActive={isActive} />
              </motion.div>
            )
          })}

          {/* Dégradés de fondu sur les bords */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black to-transparent z-20" />
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Projet précédent"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Projet ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-tiffany' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Projet suivant"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, isActive }) {
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[#111]">
      {isActive && (
        <div className="pointer-events-none absolute -inset-px rounded-[24px] border border-tiffany/20" />
      )}

      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={project.images[imgIndex]}
          alt={`Aperçu du projet ${project.title}`}
          width="380"
          height="200"
          className="h-full w-full object-cover object-top"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/5 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-md border text-[10px] font-medium tracking-wider uppercase ${badgeColors[project.badge] || badgeColors.Projet}`}>
            {project.badge}
          </span>
        </div>

        {/* Dots image */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIndex(i) }}
                className={`h-1 rounded-full transition-all duration-200 ${
                  i === imgIndex ? 'w-4 bg-white' : 'w-1 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={`text-lg font-semibold tracking-tight mb-1.5 transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
          {project.title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-white/40 tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => !isActive && e.preventDefault()}
                className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-200 ${
                  isActive
                    ? 'border-white/15 text-white/50 hover:border-white/30 hover:text-white'
                    : 'border-white/5 text-white/20 pointer-events-none'
                }`}
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => !isActive && e.preventDefault()}
                className={`grid h-9 w-9 place-items-center rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-tiffany text-black shadow-[0_4px_20px_-4px_rgba(129,216,208,0.5)] hover:brightness-110 hover:scale-105'
                    : 'bg-white/5 text-white/20 pointer-events-none'
                }`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
