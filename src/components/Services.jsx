import { Code2, GraduationCap, Palette } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Développement Web',
    description:
      "Conception et développement d'applications <strong>FullStack</strong> : sites vitrines, plateformes métier, APIs et bases de données. J'intègre l'<strong>IA</strong> (LLMs, génération, automatisation) pour enrichir vos produits.",
  },
  {
    icon: GraduationCap,
    title: 'Formation & Accompagnement',
    description:
      "Formateur chez <strong>The Hacking Project</strong>. J'accompagne les apprenants en reconversion vers le web : débogage, code review, architecture de projet et mentorat personnalisé.",
  },
  {
    icon: Palette,
    title: 'Design & Intégration',
    description:
      "Création d'interfaces modernes avec <strong>Figma</strong>. Intégration pixel-perfect avec <strong>Tailwind CSS</strong>. Du maquettage à la mise en production.",
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Ce que je fais
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            Des services sur mesure pour donner vie à vos projets digitaux.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="ios-glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-tiffany group-hover:scale-110 transition-all duration-300 mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight mb-3">
                {service.title}
              </h3>
              <p
                className="text-white/50 text-sm leading-relaxed font-light [&_strong]:text-white/80 [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
