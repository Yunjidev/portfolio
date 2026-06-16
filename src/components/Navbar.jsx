export default function Navbar() {
  return (
    <nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 animate-fade-in">
      <div className="ios-glass rounded-full px-1.5 py-1.5 flex items-center gap-1 shadow-2xl">
        <a
          href="#"
          className="px-5 py-2.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          Accueil
        </a>
        <a
          href="#work"
          className="px-5 py-2.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          Projets
        </a>
        <a
          href="#about"
          className="px-5 py-2.5 rounded-full text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          À propos
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-tiffany text-black text-xs font-medium hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
