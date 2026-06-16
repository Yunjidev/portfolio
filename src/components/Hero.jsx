import { ArrowDown, ExternalLink, Code2, BookOpen, Layers } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiMalt } from 'react-icons/si'
import profilePic from '../assets/img/yunji.webp'

export default function Hero() {
  return (
    <main className="w-full max-w-7xl px-4 md:px-8 z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center min-h-[80vh] pt-20 pb-4">
        {/* Left Column */}
        <div className="md:col-span-7 flex flex-col justify-center gap-6 md:gap-8 order-2 md:order-1">
          {/* Badge disponibilité */}
          <div className="flex items-center gap-3 opacity-0 animate-fade-in animate-delay-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tiffany opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tiffany"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-tiffany uppercase">
              Disponible pour de nouveaux projets
            </span>
          </div>

          {/* Heading */}
          <div className="opacity-0 animate-fade-in animate-delay-200">
            <h1 className="text-6xl md:text-[80px] leading-[0.95] tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
              BLF
              <br />
              Développement
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-white/40 font-light tracking-wider">
              Van Camp Florian
            </p>
            <p className="mt-5 text-lg md:text-xl text-white/50 max-w-md font-light tracking-wide leading-relaxed">
              Développeur web FullStack freelance, je conçois et développe des applications
              web modernes de A à Z — avec intégration de l'IA si besoin. Formateur chez The Hacking Project, basé en France.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-in animate-delay-300">
            <a
              href="#work"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-medium text-sm hover:scale-[1.02] transition-transform duration-200"
            >
              <span>Voir mes projets</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Yunjidev"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-tiffany transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/florian-van-camp-102aba262/"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-tiffany transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://www.malt.fr/profile/florianvancamp"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-tiffany transition-colors"
              >
                <SiMalt className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column — Widgets */}
        <div className="md:col-span-5 flex flex-col gap-4 order-1 md:order-2 opacity-0 animate-fade-in animate-delay-300">
          <div className="relative w-full grid grid-cols-2 grid-rows-3 gap-4">
            {/* Profile Card */}
            <div className="ios-glass rounded-[32px] p-6 col-span-2 flex items-center justify-between hover:bg-white/5 transition-colors duration-500 group tiffany-glow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-tiffany to-blue-600 p-[2px] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <img src={profilePic} alt="BLF Développement" width="56" height="56" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium text-base tracking-tight">
                    Développeur FullStack
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5">
                    React · Ruby · NodeJS · IA · Formateur
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="h-10 w-10 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-tiffany group-hover:text-black transition-all duration-300 text-white/30"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Stats Widget */}
            <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-white/5 transition-colors cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-white/5 text-tiffany">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-medium text-white tracking-tight">
                  7+
                </div>
                <div className="text-xs text-white/40 mt-1">Projets livrés</div>
              </div>
            </div>

            {/* Formation Widget */}
            <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group hover:bg-white/5 transition-colors cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-white/5 text-white/60">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-white tracking-tight mt-4">
                  Formateur
                </div>
                <div className="text-[10px] text-white/40 mt-1">The Hacking Project</div>
              </div>
            </div>

            {/* Tech Stack Widget */}
            <div className="ios-glass rounded-[32px] col-span-2 row-span-1 p-6 flex items-center justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-white font-medium text-lg tracking-tight">
                  Stack technique
                </h4>
                <div className="flex gap-3 mt-3 flex-wrap">
                  <Code2 className="w-5 h-5 text-white/60 hover:text-tiffany transition-colors" />
                  <span className="text-xs text-white/40 mt-0.5">React</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-white/40 mt-0.5">Ruby</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-white/40 mt-0.5">Node.js</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-white/40 mt-0.5">Tailwind</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-white/40 mt-0.5">IA</span>
                </div>
              </div>
              <div className="absolute right-[-20px] bottom-[-40px] w-32 h-32 bg-gradient-to-br from-tiffany to-transparent rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
    </main>
  )
}
