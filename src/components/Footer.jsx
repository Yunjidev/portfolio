export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full text-center py-12 border-t border-white/5 mt-10 z-10">
      <p className="text-[10px] text-white/20 uppercase tracking-widest mb-4">
        Conçu & développé en France
      </p>
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/florian-van-camp-102aba262/"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Yunjidev"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.malt.fr/profile/florianvancamp"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          Malt
        </a>
        <a
          href="mailto:florian.vancamp@gmail.com"
          className="text-xs text-white/40 hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
      <p className="text-[10px] text-white/15 tracking-wide">
        © {year} Florian Van Camp · BLF Développement
      </p>
    </footer>
  )
}
