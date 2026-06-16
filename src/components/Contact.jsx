import { Mail, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiMalt } from 'react-icons/si'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/florian-van-camp-102aba262/',
    icon: FaLinkedinIn,
    handle: '/florian-van-camp',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Yunjidev',
    icon: FaGithub,
    handle: '@Yunjidev',
  },
  {
    label: 'Malt',
    href: 'https://www.malt.fr/profile/florianvancamp',
    icon: SiMalt,
    handle: 'florianvancamp',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5">
      <div className="ios-glass rounded-[40px] p-10 md:p-16 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-[-60px] right-[-60px] w-64 h-64 bg-tiffany rounded-full opacity-[0.06] blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
              Un projet web, une mission freelance, ou simplement une question ?
              Je suis disponible pour en discuter.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href="mailto:florian.vancamp@gmail.com"
              className="group flex items-center justify-between gap-8 ios-glass rounded-2xl px-6 py-4 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tiffany" />
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Email pro</div>
                  <div className="text-sm text-white font-medium">florian.vancamp@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-tiffany transition-colors" />
            </a>

            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-8 ios-glass rounded-2xl px-6 py-4 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-tiffany transition-colors" />
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">{s.label}</div>
                      <div className="text-sm text-white font-medium">{s.handle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-tiffany transition-colors" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
