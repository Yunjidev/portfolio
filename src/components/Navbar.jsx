export default function Navbar() {
  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 animate-fade-in pointer-events-none">
      <div className="ios-glass rounded-full px-1 py-1 md:px-1.5 md:py-1.5 flex items-center gap-0.5 md:gap-1 shadow-2xl pointer-events-auto">
        <a
          href="#"
          className="px-3 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          Accueil
        </a>
        <a
          href="#work"
          className="px-3 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          Projets
        </a>
        <a
          href="#about"
          className="px-3 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          À propos
        </a>
        <a
          href="#contact"
          className="px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-tiffany text-black text-[10px] md:text-xs font-medium hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
