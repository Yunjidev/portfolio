import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="about" className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* About text */}
        <div>
          <p className="text-xs font-medium tracking-widest text-tiffany uppercase mb-4">
            Développeur Freelance
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            À propos
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light tracking-wide leading-relaxed mb-5">
            Je suis <span className="text-white font-medium">développeur web FullStack freelance</span>,
            spécialisé dans la conception et le développement d'applications web modernes — de la
            maquette jusqu'au déploiement. J'intègre l'IA dans mes projets (génération, automatisation, LLM)
            et j'interviens aussi bien sur des projets from scratch que sur des missions de renfort ou de refonte.
          </p>
          <p className="text-white/60 text-base font-light tracking-wide leading-relaxed mb-8">
            En parallèle, je suis <span className="text-white font-medium">formateur chez The Hacking Project</span>,
            où j'accompagne des apprenants en reconversion vers les métiers du web : code review,
            débogage, architecture de projet et suivi personnalisé.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tiffany flex-shrink-0"></span>
              <span className="text-sm text-white/50">France, Nord — disponible en remote</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tiffany flex-shrink-0"></span>
              <span className="text-sm text-white/50">
                Micro-entreprise ·{' '}
                <span className="text-white/70 font-medium">BLF Développement</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tiffany flex-shrink-0"></span>
              <a
                href="mailto:florian.vancamp@gmail.com"
                className="text-sm text-white/50 hover:text-tiffany transition-colors"
              >
                florian.vancamp@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Skills grid */}
        <div>
          <h3 className="text-lg font-medium text-white/70 mb-6 tracking-wide uppercase text-sm">
            Compétences
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="ios-glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors text-center font-medium tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
